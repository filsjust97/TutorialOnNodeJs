function productCategoryRouteConfig(app) {
    this.app = app;
    this.routeTable = [];
    //init is the function init bellow on the code
    this.init();
}

productCategoryRouteConfig.prototype.init = function () {
    //self = this, it's giving the object value to the variable (also an object) self;
    var self = this;
    this.addRoutes();
    this.processRoutes();
}

productCategoryRouteConfig.prototype.processRoutes = function () {
    var self = this;
    self.routeTable.forEach(function(route){
       if(route.requestType == 'get') {
           self.app.get(route.requestUrl, route.callbackFunction)
       }
       else if (route.requestType == 'post') {
           console.log(route);
           self.app.post(route.requestUrl, route.callbackFunction);
       }
       else if (route.requestType == 'delete') {}
    });
}

/**
 *The Routing is not automatic, so in this function it's added all the pages about the categories
 */
productCategoryRouteConfig.prototype.addRoutes = function () {
    var self = this;
    //push is javascript way to add a object to an Array
    self.routeTable.push({
        requestType : 'get',
        requestUrl : '/createProductCategory',
        callbackFunction : function (request, response) {
            response.render('createProductCategory', { title : "Create Product Category"});
        }
    });

    self.routeTable.push({
        requestType : 'post',
        requestUrl : '/createProductCategory',
        callbackFunction : function (request, response) {
            var productCategoryDao = require('../Server/Dao/productCategoryDao.js');
            console.log(request.body);
            productCategoryDao.productCategoryDao.createProductCategory(request.body,
                function (status) {
                    response.json(status);
                    console.log(status);
                }
            );
        }
    });

    self.routeTable.push({
        requestType : 'get',
        requestUrl : '/viewProductCategory',
        callbackFunction : function (request, response) {
            response.render('viewProductCategory', { title : "View Product Category"});
        }
    });

    self.routeTable.push({
        requestType : 'get',
        requestUrl : '/getAllProductCategory',
        callbackFunction : function (request, response) {
            var productCategoryDao = require('../Server/Dao/productCategoryDao.js');
            productCategoryDao.productCategoryDao.getAllProductCategory(
                function (productCategories) {
                    //console.log("teste2");
                    //console.log( productCategories);
                    /*for(var i=0; i<productCategories.length; i++){
                        console.log("Test1");
                        console.log(productCategories[i].categoryName);
                    }*/
                    response.json({productCategories : productCategories});
                });
        }
    });

    self.routeTable.push({
        requestType : 'get',
        requestUrl : '/editProductCategory/:productCategoryId',
        callbackFunction : function (request, response) {
            response.render('editProductCategory', { title : "Edit Product Category"});
        }
    });

    self.routeTable.push({
        requestType : 'get',
        requestUrl : '/getProductCategoryById/:productCategoryId',
        callbackFunction : function (request, response) {
            var productCategoryDao = require('../Server/Dao/productCategoryDao.js');
            productCategoryDao.productCategoryDao.getProductCategoryById(request.params.productCategoryId,
                function (productCategories) {
                    //console.log("teste2");
                    //console.log( productCategories);
                    /*for(var i=0; i<productCategories.length; i++){
                        console.log("Test1");
                        console.log(productCategories[i].categoryName);
                    }*/
                    response.json({productCategories : productCategories});
                }
            );
        }
    });
}

module.exports = productCategoryRouteConfig;