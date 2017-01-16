import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuHidden: boolean = false;

  constructor() 
  {
    
  }

  clicked() {
    this.menuHidden = !this.menuHidden;
    console.log(this.menuHidden);
  }
}


// $("#menu-toggle").click(function(e) {
//         e.preventDefault();
//         $("#wrapper").toggleClass("toggled");
//     });
//      $("#menu-toggle-2").click(function(e) {
//         e.preventDefault();
//         $("#wrapper").toggleClass("toggled-2");
//         $('#menu ul').hide();
//     });
 
    //  function initMenu() {
    //   $('#menu ul').hide();
    //   $('#menu ul').children('.current').parent().show();
    //   //$('#menu ul:first').show();
    //   $('#menu li a').click(
    //     function() {
    //       var checkElement = $(this).next();
    //       if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    //         return false;
    //         }
    //       if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    //         $('#menu ul:visible').slideUp('normal');
    //         checkElement.slideDown('normal');
    //         return false;
    //         }
    //       }
    //     );
    //   }
    // $(document).ready(function() {initMenu();});