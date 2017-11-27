import angular from 'angular';

// Create the module where our functionality can attach to
let contactModule = angular.module('app.contact', []);

// Include our UI-Router config settings
import contactConfig from './contact.config';
contactModule.config(contactConfig);


// Controllers
import contactCtrl from './contact.controller';
contactModule.controller('contactCtrl', contactCtrl);


export default contactModule;
