import Route from '@ember/routing/route';

export default class BookSearchRoute extends Route {
  queryParams = {
    query: {
      refreshModel: true,
    },
  };

  beforeModel() {
    console.log('Entering beforeModel of book-search');
  }

  model(params) {
    // You can use params.query to fetch data
    console.log('Search query:', params.query);
    console.log('book-search model hook called with', params);
    // Fetch data based on the query
  }

  afterModel() {
    console.log('Entering afterModel of book-search');
  }
}
