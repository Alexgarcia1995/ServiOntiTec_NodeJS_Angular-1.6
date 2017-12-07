import angular from 'angular';

// Create the module where our functionality can attach to
let listadoModule = angular.module('app.listado', []);

// Include our UI-Router config settings
import listadoConfig from './listado.config';
listadoModule.config(listadoConfig);


// Controllers
import listadoCtrl from './listado.controller';
listadoModule.controller('listadoCtrl', listadoCtrl);


export default listadoModule;
