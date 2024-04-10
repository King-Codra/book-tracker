import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject } from '@ember/service';

// Declare sidebar
let sidebar = document.querySelector('.sidebar');

export default class SidebarComponent extends Component {
  @inject router;
  @inject search;
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
}
