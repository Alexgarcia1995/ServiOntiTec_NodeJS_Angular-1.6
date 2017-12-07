export default class Contact {
    constructor(JWT, AppConstants, $http, $q,$state) {
      'ngInject';
  
      this._AppConstants = AppConstants;
      this._$http = $http;
      this._$state = $state;
  
    }
    sendEmail(datos) {
      return this._$http({
        url: this._AppConstants.api + '/contact',
        method: 'POST',
        data: datos,
      }).then((res) => res.data);
      
    }
  
  }