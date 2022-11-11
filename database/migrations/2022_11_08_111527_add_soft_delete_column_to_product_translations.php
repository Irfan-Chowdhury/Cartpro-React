<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSoftDeleteColumnToProductTranslations extends Migration
{
    // php artisan make:migration add_soft_delete_column_to_tableNames --table=tableNames

    public function up()
    {
        Schema::table('product_translations', function (Blueprint $table) {
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::table('product_translations', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
}
