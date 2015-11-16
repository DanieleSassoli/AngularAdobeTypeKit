# Angular Adobe Typekit

This module wants to provide an easy way to work with the Adobe TypeKit API's. All it does is call the appropriate endpoints
and return the response provided by Adobe API's.
 
##Installation
 You can easily install the package via Bower:
  
 ``` bower install ngTypeKit ```
 
##Usage
 
 After you include AngularJS you will need to include the script like.
 
 ``` <script src="/path/to/dist/build/ngTypeKit.js"></script> ```
 
  Then inject it into your main module and provide your ApiKey
  
 ```
  angular.module('yourModule', ['ngTypeKit'])
        .config(['adobeTypeKitProvider', function(adobeTypeKitProvider){
            adobeTypeKitProvider.setApiKey(YOUR_API_KEY);
        }]);
 ```
 
 Now you will be able to use the provided service like this
 
 ```
   yourApp.controller('YOUR_CONTROLLER', ['$scope', 'ngTypeKitService', function ($scope, ngTypeKitService) {
    ngTYpeKitService.getFamily(FAMILY_ID,function(err, data){
        if(!err) console.log(data);
        else console.log("error");
    });
   }]);
 ```
 
 The service exposes the following methods, each one calls the corresponding endpoint of the TypeKit API's and returns the data as is,
 so I suggest you visit their [documentation] (https://typekit.com/docs/api) for an explanation of the returned data.
 Every method has a callback as last argument, which returns the error, if any, as first parameter, and the data, as second parameter.
 
##getFamily
###[Docs](https://typekit.com/docs/api/v1/:format/families/:family)
 params: 
 
    * familyId,
    * callback
    
##getFamilyVariation
###[Docs](https://typekit.com/docs/api/v1/:format/families/:family/:variation)
 params: 
 
    * familyId,
    * variationId,
    * callback

##getKits
###[Docs](https://typekit.com/docs/api/v1/:format/kits)
 params: 
 
    * callback
    
##getKit
###[Docs](https://typekit.com/docs/api/v1/:format/kits/:kit)
 params: 
 
    * kitId,
    * callback

##createKit
###[Docs](https://typekit.com/docs/api/v1/:format/kits/:kit)
 params: 
 
    * options, you can see an example object in the Adobe Documentation, or in my example
    * callback

##updateKit
###[Docs](https://typekit.com/docs/api/v1/:format/kits/:kit)
 params: 
 
    * kitId,
    * options
    * callback
    
##deleteKit
###[Docs](https://typekit.com/docs/api/v1/:format/kits/:kit)
 params: 
 
    * kitId,
    * callback
    
##getKitFamily
###[Docs](https://typekit.com/docs/api/v1/:format/kits/:kit/families/:family)
 params: 
 
    * kitId
    * familyId,
    * callback

##updateKitFamily
###[Docs](https://typekit.com/docs/api/v1/:format/kits/:kit/families/:family)
 params: 
 
    * kitId,
    * familyId,
    * callback
    
##deleteKitFamily
###[Docs](https://typekit.com/docs/api/v1/:format/kits/:kit/families/:family)
 params: 
 
    * kitId,
    * familyId,
    * callback
 
##publishKit
###[Docs](https://typekit.com/docs/api/v1/:format/kits/:kit/publish)
 params: 
 
    * kitId,
    * callback
     
##publishedKit
###[Docs](https://typekit.com/docs/api/v1/:format/kits/:kit/published)
 params: 
  
    * kitId,
    * callback
    
##getLibraries
###[Docs](https://typekit.com/docs/api/v1/:format/libraries)
 params:
  
    *libraries,
    *callback

##getLibrary 
###[Docs](https://typekit.com/docs/api/v1/:format/libraries/:library)
 params: 
 
    * libraryId,
    * callback
 