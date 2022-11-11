<div class="tab-pane fade show" aria-labelledby="product-attribute" id="attribute" role="tabpanel">
    <div class="card">
        <h4 class="card-header"><b>@lang('file.Attributes')</b></h4>
        <hr>
        <div class="card-body">
            <div class="variants">
                @forelse ($product->productAttributeValues as $value)
                    <div class="row">
                        <div class="col-5 form-group">
                            <label>{{__('file.Atrribute')}}</label>

                            <select name="attribute_id[]" id="attributeId" class="form-control selectpicker" data-live-search="true" data-live-search-style="begins" title='{{__('file.Select Attribute')}}'>
                                @forelse ($attributes as $item)
                                    <option value="{{$item->id}}" @if($item->id==$value->attribute_id) selected @endif>{{$item->attributeTranslation->attribute_name ?? $item->attributeTranslationEnglish->attribute_name ?? null}}</option>
                                @empty
                                @endforelse
                            </select>
                        </div>

                        <div class="col-5 form-group">
                            <label>{{__("file.Values")}}</label>
                            <select name="attribute_value_id[]" id="attributeValueId" class="form-control selectpicker" data-live-search="true" data-live-search-style="begins" title="@lang('file.Select Value')">
                                @foreach ($attribute_values as $attributeValue)
                                    @if ($attributeValue->attribute_id == $value->attribute_id)
                                        <option value="{{$attributeValue->id}}" @if($value->attribute_value_id==$attributeValue->id) selected @endif>{{$attributeValue->attrValueTranslation->value_name ?? $attributeValue->attrValueTranslationEnglish->value_name ?? null}}</option>
                                    @endif
                                @endforeach
                            </select>
                        </div>

                        <div class="col-2">
                            <label>@lang('file.Delete')</label><br>
                            <span class="btn btn-default btn-sm del-row"><i class="dripicons-trash"></i></span>
                        </div>
                    </div>
                @empty
                    <div class="row">
                        <div class="col-5 form-group">
                            <label>{{__('file.Atrribute')}}</label>
                            <select name="attribute_id[]" id="attributeId" class="form-control selectpicker" data-live-search="true" data-live-search-style="begins" title='{{__('file.Select Attribute')}}'>
                                @forelse ($attributes as $item)
                                    <option value="{{$item->id}}">{{$item->attributeTranslation->attribute_name ?? $item->attributeTranslationEnglish->attribute_name ?? null}}</option>
                                @empty
                                @endforelse
                            </select>
                        </div>

                        <div class="col-6 form-group">
                            <label>{{__("file.Values")}}</label>
                            <select name="attribute_value_id[]" id="attributeValueId" class="form-control selectpicker"  data-live-search="true" data-live-search-style="begins" title="@lang('file.Select Value')">

                            </select>
                        </div>

                        <div class="col-1">
                            <label>@lang('file.Delete')</label><br>
                            <span class="btn btn-default btn-sm del-row"><i class="dripicons-trash"></i></span>
                        </div>
                    </div>
                @endforelse
            </div>

            <span class="btn btn-link add-more" id="addMore"><i class="dripicons-plus"></i> @lang('file.Add New Attribute')</span>


            <!-- Attribute Wise Inventory -->
            <div class="card">
                <div class="card-body">
                    <label class="text-bold">For maintaining attribute wise inventory please goto the link below</label>
                    <br>
                    <a href="{{route('admin.products.attribute_inventory',$product->id)}}" target="__blank" class="btn btn-outline-primary btn-sm">Click Here</a>
                </div>
            </div>

            {{-- <input type="chekbox" class="form-control"> Enable Varient Wise Inventory --}}
            {{-- <div class="form-group row">
                <div class="col-sm-8">
                    <div class="form-check mt-1">
                        <input type="checkbox" value="1" name="reviews_and_ratings" id="reviewsAndRatings" class="form-check-input">
                        <label class="p-0 form-check-label" for="exampleCheck1">@lang('file.Enable Varient Wise Inventory')</label>
                    </div>
                </div>
            </div> --}}

        </div>
    </div>
</div>
