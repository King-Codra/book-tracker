import EmberRouter from '@ember/routing/router';
import config from 'book-tracker/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // this.route('my-books', { path: '/my-books' });
  // this.route('book');
  // this.route('wishlist', { path: '/wishlist ' });
});
