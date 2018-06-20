import EmberRouter from '@ember/routing/router';

import config from './config/environment';

let Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function() {
    this.route("input", {path: "/input"});
    this.route("unselected", {path: "/unselected"});
    this.route("button", {path: "/button"});
});

export default Router;
