var app = angular.module("app", []);

app.controller("Controller", ["$scope",function($scope) {

    $scope.ingredientes = [
    ];

    $scope.add = {
      nombre : ''
    };
 
    $scope.add_ingrediente = function() {
      var campoVacio = ($scope.add.nombre === "" || comprobarExistecia()) ? console.log("vacio") : $scope.ingredientes.push(angular.copy($scope.add));
      var mostrarH6 = ($scope.add.nombre === "" ) ? $scope.titulo = false : $scope.titulo = true;//crea "ingredientes"
      console.log($scope.ingredientes);
      $scope.title = 'Ingredientes';//crea ingredientes
    };

    $scope.delete_ingrediente = function(event) {
      console.log("id boton:"+event.target.id);//id del boton X
      var equis = event.target.id;
      $scope.ingredientes.splice(equis,1);

      console.log($scope.ingredientes);//log para ver objetos

      if ($scope.ingredientes.length === 0){//borra "ingredientes" si no hay elementos.
        $scope.titulo = false;
      };
    };

    function comprobarExistecia (){
      var existe = false;
      for(var i = 0; i < $scope.ingredientes.length; i++) {
          if ($scope.ingredientes[i].nombre == $scope.add.nombre) {
              existe = true;
              break;
          }
      }
      return existe;
    }
}]);
