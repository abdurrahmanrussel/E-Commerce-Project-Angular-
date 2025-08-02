import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my_project';

  showHeader = true;
  showContent = true;
  id: string | number | null = null;

  days: number | string = 194;
  hours = 22;
  mins = 14;
  secs = 4;

  content: string = "Samsung mobile is a good product for using long time. it is good for charging , carrying etc.";

  private routerSubscription!: Subscription;
  private countdownIntervalId: any;

  constructor(private router: Router) {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.url;

        this.showHeader = !(url === '/login' || url === '/register');

        this.showContent = !(
          url === '/login' ||
          url === '/register' ||
          url === '/user' ||
          url === '/about' ||
          url === '/contact'
        );
      }
    });
  }

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    if (this.countdownIntervalId) {
      clearInterval(this.countdownIntervalId);
    }
  }

  drop(param: string | number) {
    if (this.id === param) {
      this.id = null;
    } else {
      this.id = param;
    }
  }

  // Banner slider with autoplay
  bannerSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
    responsive: {
      0: { items: 1 },
      400: { items: 1 },
      740: { items: 1 },
      940: { items: 1 }
    },
    nav: true,
    autoplay: true,            // Enable auto slide
    autoplayTimeout: 3000,     // 3 seconds
    autoplayHoverPause: true   // Pause on hover
  };

  // Testimonial slider with autoplay
  testimonialSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 3 },
      940: { items: 1 }
    },
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,      // 5 seconds
    autoplayHoverPause: true
  };


  

  url = "../assets/img3.webp";
  url2 = "../assets/img5.jpg";
  url3 = "../assets/img8.jpeg";
  url4 = "../assets/img12.webp";

  changeImage(event: Event) {
    const target = event.target as HTMLImageElement;
    this.url = target.src;
  }

  changeImage2(event: Event) {
    const target = event.target as HTMLImageElement;
    this.url2 = target.src;
  }

  changeImage3(event: Event) {
    const target = event.target as HTMLImageElement;
    this.url3 = target.src;
  }

  changeImage4(event: Event) {
    const target = event.target as HTMLImageElement;
    this.url4 = target.src;
  }

   resetImage() {
    this.url = '../assets/img1.jpeg';
    this.url2 = '../assets/img4.jpg';
    this.url3 = '../assets/img7.jpg';
    this.url4 = '../assets/img10.webp';
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 3 },
      940: { items: 4 }
    },
    nav: false
  };

  policyOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: false,
  navSpeed: 700,
  navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
  nav: true,
  responsive: {
    0: {          // Mobile screens
      items: 1
    },
    400: {        // Small screens
      items: 2
    },
    740: {        // Medium screens (Tablets, etc.)
      items: 3
    },
    1024: {       // Desktop screens
      items: 3
    },
    1440: {       // Larger desktop screens
      items: 4
    },
    1920: {       // Ultra-wide screens
      items: 5
    }
  }
};

partnerOptions: OwlOptions = {
  loop: true,
  margin: 15,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  dots: false,
  nav: false,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    },
    1400: {
      items: 5
    }
  }
};



  startCountdown() {
    this.countdownIntervalId = setInterval(() => {
      const futureDate = new Date("December 15, 2025 23:59:59").getTime();
      const today = new Date().getTime();
      const distance = futureDate - today;

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.secs = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance <= 0) {
        clearInterval(this.countdownIntervalId);
        this.days = "offer is expired";
        this.hours = 0;
        this.mins = 0;
        this.secs = 0;
      }
    }, 1000);
  }
}
