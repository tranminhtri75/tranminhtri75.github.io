var app=angular.module("myApp",['LocalStorageModule']);

app.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('myApp')
    .setStorageType('sessionStorage')
    .setNotify(true, true)
});