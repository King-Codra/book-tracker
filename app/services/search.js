import Service from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject } from '@ember/service';

export default class SearchService extends Service {
  @inject router;
  @tracked searchTerm = '';

  @action
  updateSearchTerm(e) {
    this.searchTerm = e.target.value;
  }

  @action
  performSearch(transition = true) {
    let searchQuery = this.searchTerm.trim();
    if (!searchQuery) {
      console.log('Search query is empty');
      return;
    }

    if (transition) {
      this.router.transitionTo('book-search', {
        queryParams: { query: searchQuery },
      });
    } else {
      this.route.refresh();
    }

    this.searchTerm = '';
  }

  @action
  handleKeyPress(e, transition = true) {
    if (e.key === 'Enter') {
      this.performSearch(transition);
    }
  }
}
