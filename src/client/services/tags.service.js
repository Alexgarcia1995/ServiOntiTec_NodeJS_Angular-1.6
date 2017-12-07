export default class Tags {
  constructor(JWT, AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;


  }

  sendEmail(datos){
    return this._$http({
      url: this._AppConstants.api + '/contact',
      method: 'POST',
      data: datos,
    }).then((res)=>res.data.contact);

  }


}
