angular.module("productCategoryModule")
    .factory("productCategoryService", productCategoryService);

productCategoryService.$inject = ['$http'];

function productCategoryService($http) {

    return {
        createProductCategory : function (productCategory) {

            return $http.post('/createProductCategory',
                {
                   categoryName : productCategory.categoryName,
                   details : productCategory.categoryDetails
                }
            );

        },
        getAllProductCategories : function () {
            return $http.get('/getAllProductCategory');
        },

        getIdFromEndPoint : function () {
            var absoluteUrl = window.location.href;
            var segments = absoluteUrl.split("/");
            var productCategoryId = segments[segments.length-1];

            return productCategoryId;
        },
        
        getProductCategoryById : function (productCategoryId) {
            console.log(productCategoryId);
            return $http.get('/getProductCategoryById/' + productCategoryId);
        }
    };

}