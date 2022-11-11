<?php

namespace App\Repositories\Product;

use App\Contracts\Product\ProductContract;
use App\Models\Product;
use App\Repositories\BaseRepository;

class ProductRepository extends BaseRepository implements ProductContract
{
    public function __construct(Product $model){
        parent::__construct($model);
    }

    public function getAllProductsByIds($ids){
        return Product::whereIn('id',$ids)->get();
    }
}
