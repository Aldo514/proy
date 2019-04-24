var app = angular.module("app", []);

app.controller('UserController',['$scope', function($scope) {
  $scope.user = {
    correo:"",
    nombre:"",
    psw: "",
    psw2: ""
  };

  $scope.compare = function () {
    $scope.resultPsw = angular.equals($scope.user.psw, $scope.user.psw2);
    console.log($scope.resultPsw);
    if ($scope.resultPsw) {
      psw2.className = "form-control ng-pristine";
      psw.className = "form-control ng-pristine";
    }else if (!$scope.resultPsw) {
      psw2.className = "form-control ng-invalid";
      psw.className = "form-control ng-invalid";
    }
  }

  $scope.registrar = function () {
      if ($scope.miFormulario.$valid) {
        console.log($scope.user);
      }
  };

  $scope.patron = {
    nombre: /^([a-z]+[0-9]{0,2}){5,12}$/, //entre 5-12 caracteres + 2 num
    psw: /[A-Za-z0-9!?-]{8,12}/, //entre 8-12 caracteres, mayus, minus, numeros y !?
    psw2: /[A-Za-z0-9!?-]{8,12}/,
  };

}]);


app.controller('carrusel', ['$scope', function($scope) {
  $scope.articulo = [
    $scope.art1 = {
      titulo: "El mejor café",
      descripcion: "Te enseñamos como preparar el mejor café",
      img: "https://picsum.photos/600/400/?image=425"
    },

    $scope.art2 = {
      titulo: "Cortar verduras sin morir",
      descripcion: "Un pequeño tutorial para cortar verduras sin morir en el intento",
      img: "https://picsum.photos/600/400/?image=292"
    },

    $scope.art3 = {
      titulo: "",
      descripcion: "",
      img: "https://picsum.photos/600/400/?image=995"
    }
  ];

}]);

app.controller("CargaArticulos", ['$scope', '$log', '$http', function ($scope, $log, $http) {
  $scope.articulo = {
    titulo: "",
    sub: "",
    texto: "",
    fechaCreacion: new Date()
  }

  $log.debug("Acabamos de crear el $scope");

  $http({
    method: 'GET',
    url: 'json/recetaFacil.json'
  }).then(function exito(response) {
    for (let i = response.data.recetas.length; i >= 0; i--) {
      $scope.articulo[i] = response.data.recetas[i];
    }
  }, function error (status) {
    alert("Ha fallado la petición. Estado HTTP:" + status);
  });
  
  $scope.showFacil = true;
  var archivoJson = "";
  
  if ($scope.showFacil === true) {
   archivoJson = "json/recetaFacil.json";
}

}]);