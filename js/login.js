var app = angular.module('app', []);

app.value('DefaultUsuario',{
	name : "",
	psw : ""
});

function Usuario (defecto) {
	this.name = defecto.name;
	this.psw = defecto.psw;

	this.setName = function (name) {
		this.name = name;
	};

	this.setPsw = function (psw) {
		this.psw = psw;
	};
};


app.service("usuario",['DefaultUsuario',Usuario]);

app.controller('UserController', ['$scope', 'usuario', function($scope, usuario){
	$scope.cliente = {
		nombre : "",
		psw : ""
	};
	
	$scope.entrar = function () {
		usuario = $scope.cliente;
		console.log(usuario);
	};

}]);

