function store() {
    this.products = [
        new product("APLIPD16B", "Apple iPad 4 16GB", "Apple iPad 4 16GB 9.7 inch Retina Display - Black", 299),
        new product("APLIPD32B", "Apple iPad 4 32GB", "Apple iPad 4 32GB 9.7 inch Retina Display - Black", 399),
        new product("APLIPD64B", "Apple iPad 4 64GB", "Apple iPad 4 64GB 9.7 inch Retina Display - Black", 499),
        new product("APLIPD128B", "Apple iPad 4 128GB", "Apple iPad 4 128GB 9.7 inch Retina Display - Black", 599),
        new product("APLIPD256B", "Apple iPad 4 256GB", "Apple iPad 4 256GB 9.7 inch Retina Display - Black", 699),
        new product("APLIPD512B", "Apple iPad 4 512GB", "Apple iPad 4 512GB 9.7 inch Retina Display - Black", 899),
        new product("APLIPD16W", "Apple iPad 4 16GB", "Apple iPad 4 16GB 9.7 inch Retina Display - White", 299),
        new product("APLIPD32W", "Apple iPad 4 32GB", "Apple iPad 4 32GB 9.7 inch Retina Display - White", 399),
        new product("APLIPD64W", "Apple iPad 4 64GB", "Apple iPad 4 64GB 9.7 inch Retina Display - White", 499),
        new product("APLIPD128W", "Apple iPad 4 128GB", "Apple iPad 4 128GB 9.7 inch Retina Display - White", 599),
        new product("APLIPD256W", "Apple iPad 4 256GB", "Apple iPad 4 256GB 9.7 inch Retina Display - White", 699),
        new product("APLIPD512W", "Apple iPad 4 512GB", "Apple iPad 4 512GB 9.7 inch Retina Display - White", 899),
        new product("APLIPD16S", "Apple iPad 4 16GB", "Apple iPad 4 16GB 9.7 inch Retina Display - Silver", 299),
        new product("APLIPD32S", "Apple iPad 4 32GB", "Apple iPad 4 32GB 9.7 inch Retina Display - Silver", 399),
        new product("APLIPD64S", "Apple iPad 4 64GB", "Apple iPad 4 64GB 9.7 inch Retina Display - Silver", 499),
        new product("APLIPD128S", "Apple iPad 4 128GB", "Apple iPad 4 128GB 9.7 inch Retina Display - Silver", 599),
        new product("APLIPD256S", "Apple iPad 4 256GB", "Apple iPad 4 256GB 9.7 inch Retina Display - Silver", 699),
        new product("APLIPD512S", "Apple iPad 4 512GB", "Apple iPad 4 512GB 9.7 inch Retina Display - Silver", 899)
    ];
    
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}