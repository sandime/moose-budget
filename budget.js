/**
 * Created by SHERRI on 4/2/15.
 */
function budgetController($scope) {

    $scope.totalExpenses = function () {
        var rent = $scope.rent;
        var gas = $scope.gas;
        var groceries = $scope.groceries;
        return rent + gas + groceries;
    };


    $scope.difference = function () {
        var totalExpenses = $scope.totalExpenses();
        var income = $scope.income;
        return income + totalExpenses;
    };


}
