import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my_project';

  showHeader= true;
  showContent= true;
  constructor(private router: Router) {
    router.events.subscribe(
      (val)=> {
        if(val instanceof NavigationEnd) {
          if(val.url==='/login' || val.url==='/register' ) {
            this.showHeader=false;
          }
          else {
            this.showHeader=true;
          }
        }
      }
    );

    router.events.subscribe(
      (val)=> {
        if(val instanceof NavigationEnd) {
          if(val.url==='/login' || val.url==='/register' || val.url==='/user' || val.url==='/about' || val.url==='/contact' ) {
            this.showContent=false;
          }
          else {
            this.showContent=true;
          }
        }
      }
    )

  }

  
  
  ngOnInit(){}

  content:string= "Samsung mobile is a good product for using long time. it is good for charging , carring etc.";

  id:any;
  drop(param:any){
    if(this.id==param) {
      this.id= "";
    }
    else 
      this.id=param;
  }

  bannerSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  };

  testimonialSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  };

  url:string= "../assets/img3.webp";
  changeImage(event:any) {
    this.url= event.target.src;
    }

  url2:string= "../assets/img5.jpg";
  changeImage2(event:any) {
    this.url2= event.target.src;
    }

    url3:string= "../assets/img8.jpeg";
  changeImage3(event:any) {
    this.url3= event.target.src;
    }

    url4:string= "../assets/img12.webp";
    changeImage4(event:any) {
      this.url4= event.target.src;
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
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: false
};

policyOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  navSpeed: 700,
  navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 3
    }
  },
  nav: true
}

days:any= 194;
hours:number=22;
mins:number= 14;
secs:number= 4;


x= setInterval(()=>{
  var futureDate= new Date("May 15, 2023 23:59:59").getTime();
  var today= new Date().getTime();
  var distance= futureDate-today;
  this.days= Math.floor(distance/(1000*60*60*24));
  this.hours=Math.floor( (distance% (1000*60*60*24) ) /(1000*60*60));
  this.mins=Math.floor( (distance% (1000*60*60) ) /(1000*60));
  this.secs=Math.floor( (distance% (1000*60) ) /1000);
  if(distance<=0) {
    clearInterval(this.x);
    this.days="offer is expired";
    this.hours=0;
    this.mins=0;
    this.secs=0;
  }
}, 1000)


}


