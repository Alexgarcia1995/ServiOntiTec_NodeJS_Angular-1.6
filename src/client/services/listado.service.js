export default class Listado {
    constructor(JWT, AppConstants, $http, $q,$state) {
      'ngInject';
  
      this._AppConstants = AppConstants;
      this._$http = $http;
      this._$state = $state;
  
    }
    getListado(){
        return this._$http({
            url: this._AppConstants.api + '/listado',
            method: 'GET',
        }).then((res) => res.data);
    }
    }
  