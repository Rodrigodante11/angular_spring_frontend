import {AfterViewInit, Component} from '@angular/core';
import jQuery from 'jquery';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {

    // tslint:disable-next-line:only-arrow-functions
    (function($) { // executado apos inicializar o componente
      'use strict';

      // Add active state to sidbar nav links
      // tslint:disable-next-line:prefer-const
      const path = window.location.href; // because the 'href' property of the DOM element is the absolute path
      $('#layoutSidenav_nav .sb-sidenav a.nav-link').each(function() {
        if (this.href === path) {
          $(this).addClass('active');
        }
      });

      // Toggle the side navigation
      // tslint:disable-next-line:only-arrow-functions
      $('#sidebarToggle').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('sb-sidenav-toggled');
      });
    })(jQuery);
  }

}
