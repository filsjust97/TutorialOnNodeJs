angular.module("productCategoryModule")
    .controller("editProductCategoryController", editProductCategoryController);

editProductCategoryController.$inject = ['$scope', '$timeout', 'productCategoryService'];

function editProductCategoryController($scope, $timeout, productCategoryService) {

    $scope.productCategory = {

        categoryName : "",
        categoryDetails : ""

    };


    getProductCategoryById();

    $scope.ValidationResult = {
        containsValidationError : false,
        ValidationSummary : ""
    }

    function bindView(productCategory) {
        $scope.productCategory.categoryName = productCategory.CategoryName;
        $scope.productCategory.categoryDetails = productCategory.Details;
    }

    function getProductCategoryById() {
        productCategoryService.getProductCategoryById(productCategoryService.getIdFromEndPoint())
            .then(function (data) {
                console.log(data);
                console.log(data.data.productCategories[0].CategoryName);
                if(data
                    && data.data.productCategories
                    && data.data.productCategories.length > 0){
                    bindView(data.data.productCategories[0]);
                }
            })
    }
}