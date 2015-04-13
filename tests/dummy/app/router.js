import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route("input", {path: "/input"});
    this.route("unselected", {path: "/unselected"});
    this.route("button", {path: "/button"});
});

export default Router;
