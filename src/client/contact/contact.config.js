function ContactConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.contact', {
    url: '/',
    controller: 'contactCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'contact/view/contact.html',
    title: 'contact'
  });

};

export default ContactConfig;
