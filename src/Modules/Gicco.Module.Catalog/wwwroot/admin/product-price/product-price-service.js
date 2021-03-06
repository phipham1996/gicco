﻿/*global angular*/
(function () {
    angular
        .module('giccoAdmin.catalog')
        .factory('productPriceService', productPriceService);

    /* @ngInject */
    function productPriceService($http) {
        var service = {
            getProducts: getProducts,
            updateProductPrices: updateProductPrices
        };
        return service;

        function getProducts(params) {
            return $http.post('api/product-prices/grid', params);
        }

        function updateProductPrices(products) {
            return $http.put('api/product-prices', products);
        }
    }
})();