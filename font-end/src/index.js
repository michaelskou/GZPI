/**
 * Created by Lxg on 2017/6/12.
 */

import './assets/less/index.less';
import routerConf from './config/router/routerConf';
import scripts from './config/scripts';

angular.module('app.directives', []);
angular.module('app.services', []);
angular.module('app.controllers', []);

scripts.forEach(item => {
  if (item.directive) {
    angular.module('app.directives').directive(item.directive.directiveName, item.directive);
  }
  if (item.service) {
    angular.module('app.services').factory(item.service.serviceName, item.service);
  }
  if (item.controller) {
    angular.module('app.controllers').controller(item.controller.controllerName, item.controller);
  }
});

let app = angular.module('app', ['ui.router', 'app.directives', 'app.services', 'app.controllers']);

app.run(['$rootScope', function ($rootScope) {
}]);

app.config(routerConf);
