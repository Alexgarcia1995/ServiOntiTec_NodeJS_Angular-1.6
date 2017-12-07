function ListadoConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.listado', {
    url: '/',
    controller: 'listadoCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'listado/view/listado.html',
    title: 'listado'
  });

};

export default ListadoConfig;
