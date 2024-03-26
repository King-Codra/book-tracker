import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    let books = localStorage.getItem('myBooks');
    return books ? JSON.parse(books) : [];
  }
}
