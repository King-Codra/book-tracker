import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class BookSearchRoute extends Route {
  @inject('book-fetch-fake-api') bookFetchFakeApi;

  queryParams = {
    query: {
      refreshModel: true,
    },
  };

  async model(params) {
    return await this.bookFetchFakeApi.testFetch(params.query);
  }
}
