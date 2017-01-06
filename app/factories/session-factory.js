(function () {
  'use strict';

  angular.module('fishingApp')

  .factory('SessionFactory', function ($http) {

    var factory = {};
    var url = 'http://localhost:8080/Fishing/app/db/sessions.php';

    // get all data from database
    factory.getSessions = function (){
         var promise = $http({
             method: 'POST',
             url: url,
             data: $.param({'requestType':'getSessions'}),
             headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
         return promise;
     };

     factory.insertSession = function (session){
          var promise = $http({
              method: 'POST',
              url: url,
              data: $.param({'requestType':'insertSession', 'session':session.session, 'date':session.date}),
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
             });
          return promise;
      };

      factory.deleteSession = function (id){
           var promise = $http({
               method: 'POST',
               url: url,
               data: $.param({'requestType':'deleteSession', 'id':id}),
               headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
              });
           return promise;
       };

       factory.updateSession = function (session){
            var promise = $http({
                method: 'POST',
                url: url,
                data: $.param({'requestType':'updateSession', 'id':session.id , 'session':session.session, 'date':session.date}),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
               });
            return promise;
        };

       return factory;

  });

})();
