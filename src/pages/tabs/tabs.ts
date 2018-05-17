import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { Page1 } from '../page1/page1';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Page1;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
