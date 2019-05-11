var app = angular.module('app', ['ngTouch', 'ui.grid']);


app.controller('OrdenarCtrl', function($scope){

    $scope.gridOptions = {
        enableShorting: true,
        columnDefs: [
            {field: 'nome'},
            {field: 'sobrenome'},
            {field: 'email', enableShorting: false},
            {field: 'empresa', enableShorting: false}
        ],
        onRegisterApi: function(gridApi){
            $scope.gridApi = gridApi;
            console.log($scope.gridApi);
        }
    };

    $scope.gridOptions.data = [
        {
            "nome": "Cox",
            "sobrenome": "Carney",
            "email": "abc@teste.com.be",
            "empresa": "xpto"
        },
        {
            "nome": "Nancy",
            "sobrenome": "Mahone",
            "email": "abc@teste.com.be",
            "empresa": "xpto"
        }
    ];
});
 
