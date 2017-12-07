class contactCtrl {
  constructor($scope,Contact,$state) {
    'ngInject';

    $scope.contact = {
      inputName: "",
      inputEmail: "",
      inputPhone: "",
      inputMessage: ""
  };

  $scope.SubmitContact = function () {
      var data = {
      "type":"contact",
      "inputName": $scope.contact.inputName, 
      "inputEmail": $scope.contact.inputEmail, 
      "inputPhone": $scope.contact.inputPhone, 
      "inputMessage": $scope.contact.inputMessage,
      "location":window.location.origin,
      "token":'contact_form'};
      
      var contact_form = JSON.stringify(data);
      //console.log(contact_form);
      Contact.sendEmail(contact_form).then(function(res){
        if(res){
          $state.go("app.home");
        }
      })
  };
}
}

export default contactCtrl;
