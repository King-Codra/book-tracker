import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject } from '@ember/service';

export default class SidebarComponent extends Component {
  @inject router;
  @tracked searchTerm = '';

  @action
  updateSearchTerm(event) {
    this.searchTerm = event.target.value;
  }

  @action
  searchBooks() {
    if (!this.searchTerm) {
      console.log('No search term entered');
      return;
    }
    let searchTerm = this.searchTerm.replace(/ /g, '');
    console.log('Searching books for ISBN:', searchTerm);

    // Redirect to the book-search route with the ISBN as a query parameter
    this.router.transitionTo('book-search', {
      queryParams: { query: searchTerm },
    });
  }

  @action
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.searchBooks();
    }
  }
}
