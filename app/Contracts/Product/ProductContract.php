<?php

namespace App\Contracts\Product;

use App\Contracts\BaseContract;

interface ProductContract extends BaseContract
{
    public function getAllProductsByIds($ids);
}
