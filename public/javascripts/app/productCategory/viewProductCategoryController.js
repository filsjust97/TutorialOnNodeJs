angular.module("productCategoryModule")
.controller("viewProductCategoryController", viewProductCategoryController);

viewProductCategoryController.$inject = ['$scope', '$timeout', 'productCategoryService'];

function viewProductCategoryController($scope, $timeout, productCategoryService) {

    $scope.productCategories = [];

    getAllProductCategories();

    function getAllProductCategories() {
        productCategoryService.getAllProductCategories()
            .then(function (data) {
            if(data
                && data.data.productCategories
                && data.data.productCategories.length > 0){
                $scope.productCategories = data.data.productCategories;
            }
        })
    }
}