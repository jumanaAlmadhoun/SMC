import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Lang!: { en: string; ar: string; };

  images = [
    {
      imageSrc:
        'assets/images/3.jpeg',
      imageAlt: '',
    },
    {
      imageSrc:
        "assets/images/2.jpeg",
      imageAlt: 'Error',
    },
    {
      imageSrc:
        "assets/images/1.jpeg",
      imageAlt: 'Error',
    },


  ]
  /*router: any;
  auth: any;*/

  constructor(private router: Router, public translate: TranslateService) {

  }

  ngOnInit(): void {
    if (this.translate.currentLang == 'ar') {
      Swal.fire({
        imageUrl: 'assets/images/resto map.jpg',
        imageWidth: 380,
        imageHeight: 200,
        imageAlt: 'Custom image',
        confirmButtonColor: "#009733",
        text: 'تم فتح المناطق المحيطة بحلبة كورنيش جدة و جدة آرت بروميناد والمطاعم للزوار',
        showCloseButton: true,
        confirmButtonText: 'لمعرفة المزيد',
        //showConfirmButton: false,
        // timer: 8000,
        //routerLink="/importantNews"
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/importantNews']);
        }

      });
    } else {
      Swal.fire({
        imageUrl: 'assets/images/resto map.jpg',
        imageWidth: 380,
        imageHeight: 200,
        imageAlt: 'Custom image',
        confirmButtonColor: "#009733",
        text: 'The Jeddah Corniche Circuit, the Art Promenade and the restaurant areas are now open to the public.',
        showCloseButton: true,
        confirmButtonText: 'Find out more',
        //showConfirmButton: false,
        // timer: 8000,
        //routerLink="/importantNews"
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/importantNews']);
        }

      });
    }



  }


  English(): void {
    Swal.fire({
      imageUrl: 'assets/images/resto map.jpg',
      imageWidth: 380,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonColor: "#009733",
      text: 'The Jeddah Corniche Circuit, the Art Promenade and the restaurant areas are now open to the public.',
      showCloseButton: true,
      confirmButtonText: 'Find out more',
      //showConfirmButton: false,
      // timer: 8000,
      //routerLink="/importantNews"
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/importantNews']);
      }

    });
  }
}



