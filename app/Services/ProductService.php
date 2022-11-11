<?php
namespace App\Services;

use App\Contracts\Category\CategoryProductContract;
use App\Contracts\Product\ProductAttributeValueContract;
use App\Contracts\Product\ProductContract;
use App\Contracts\Product\ProductImageContract;
use App\Contracts\Product\ProductTagContract;
use App\Contracts\Product\ProductTranslationContract;
use App\Utilities\Message;
use Illuminate\Support\Facades\File;

class ProductService extends Message
{
    private $productContract;
    private $productTranslationContract;
    private $productImageContract;
    private $productAttributeValueContract;
    private $categoryProductContract;
    private $productTagContract;

    public function __construct(ProductContract $productContract,
                                ProductTranslationContract $productTranslationContract,
                                ProductAttributeValueContract $productAttributeValueContract,
                                ProductImageContract $productImageContract,
                                CategoryProductContract $categoryProductContract,
                                ProductTagContract $productTagContract)
    {
        $this->productContract            = $productContract;
        $this->productTranslationContract = $productTranslationContract;
        $this->productImageContract       = $productImageContract;
        $this->productAttributeValueContract= $productAttributeValueContract;
        $this->categoryProductContract    = $categoryProductContract;
        $this->productTagContract         = $productTagContract;
    }


    public function activeById($id){
        if (!auth()->user()->can('product-action')){
            return Message::getPermissionMessage();
        }
        $this->productContract->active($id);
        return Message::activeSuccessMessage();
    }


    public function inactiveById($id){
        if (!auth()->user()->can('product-action')){
            return Message::getPermissionMessage();
        }
        $this->productContract->inactive($id);
        return Message::inactiveSuccessMessage();
    }


    public function destroy($id){
        if (!auth()->user()->can('product-action')){
            return Message::getPermissionMessage();
        }
        $product = $this->productContract->getById($id);
        $product->categories()->detach();  // PIVOT
        $product->tags()->detach();  // PIVOT

        $this->productContract->destroy('id', $id);
        $this->productTranslationContract->destroy('product_id', $id);
        $this->productAttributeValueContract->destroy('product_id', $id);
        //Image
        $this->deleteImageFileByProductId($id);
        $this->productImageContract->destroy('product_id', $id);

        return Message::deleteSuccessMessage();
    }

    public function bulkActionByTypeAndIds($type, $ids){
        if (!auth()->user()->can('product-action')){
            return Message::getPermissionMessage();
        }
        if ($type=='delete') {
            $this->productTranslationContract->bulkAction($type, 'product_id', $ids);
            $this->categoryProductContract->bulkAction($type, 'product_id', $ids);
            $this->productTagContract->bulkAction($type, 'product_id', $ids);
            $this->productAttributeValueContract->bulkAction($type, 'product_id', $ids);
            // Image Section
            $products = $this->productContract->getAllProductsByIds($ids);
            foreach ($products as $item) {
                $this->deleteImageFileByProductId($item->id);
            }
            $this->productImageContract->bulkAction($type, 'product_id', $ids);
        }
        $this->productContract->bulkAction($type, 'id', $ids);

        if ($type=='delete') {
            return Message::deleteSuccessMessage();
        }else{
            return $type=='active' ? Message::activeSuccessMessage() : Message::inactiveSuccessMessage();
        }
    }

    protected function deleteImageFileByProductId($product_id){
        $productImage = $this->productImageContract->getAllImageByProductId($product_id);
        if ($productImage){
            foreach ($productImage as $value){
                if (File::exists(public_path().$value->image)){
                    File::delete(public_path().$value->image);
                    File::delete(public_path().$value->image_medium);
                    File::delete(public_path().$value->image_small);
                }
            }
        }
    }

}
