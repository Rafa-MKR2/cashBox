import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ConfigPage } from '../config/config';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab4Root = ConfigPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
