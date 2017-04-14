import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

// TODO: remove lint override when we have a route and it actually returns something
Router.map(function () { // eslint-disable-line 
});

export default Router;
