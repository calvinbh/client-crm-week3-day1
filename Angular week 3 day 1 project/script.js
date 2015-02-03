var app = angular.module('clients', []);

app.controller('crmController', function ($scope) {
    $scope.obj = {};
    $scope.clients = [];

    $scope.client = function (name, date, notes, followUp) {
        this.name = name;
        this.date = date;
        this.notes = notes;
        this.followUp = followUp;
        this.isClosed = false;
        this.isLost = false;
    };

    $scope.addClient = function () {
        var client = new $scope.client($scope.obj.name, $scope.obj.date, $scope.obj.notes)
        $scope.clients.unshift(client);
        $scope.obj.name = '';
        $scope.obj.date = '';
        $scope.obj.notes = '';
    };

    $scope.isClosedBtn = function (index) {
        $scope.clients[index].isClosed = !$scope.clients[index].isClosed;
    };
});