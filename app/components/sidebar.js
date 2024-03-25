import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SidebarComponent extends Component {
  searchText = '';

  @action
  toggleSearch() {
    // Logic to toggle search input visibility
  }

  @action
  performSearch() {
    // Logic to perform the search
  }
}
