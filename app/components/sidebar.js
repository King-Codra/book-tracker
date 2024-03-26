import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject } from '@ember/service';

// Declare sidebar
let sidebar = document.querySelector('.sidebar');

export default class SidebarComponent extends Component {
  @inject router;
  @tracked searchTerm = '';

  @action
  expandSidebar() {
    sidebar.classList.add('expanded');
  }

  @action
  collapseSidebar() {
    if (!sidebar.matches(':hover')) {
      sidebar.classList.remove('expanded');
    }
  }

  @action
  updateSearchTerm(event) {
    this.searchTerm = event.target.value;
  }

  @action
  searchBooks() {
    let searchQuery = this.searchTerm.trim();
    if (!searchQuery) {
      console.log('Search query is empty');
      return;
    }
    this.router.transitionTo('book-search', {
      queryParams: { query: searchQuery },
    });
    this.searchTerm = '';
  }

  @action
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.searchBooks();
    }
  }
}
