import Route from '@ember/routing/route';

export default class MyBooksRoute extends Route {
  model() {
    let books = localStorage.getItem('myBooks');
    return books ? JSON.parse(books) : [];
  }
}
