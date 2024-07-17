import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

  redirect!:string;
  constructor(private route:Router){

  }

redirecturls(url:any){
    console.log(url);
if(url === 'home'){
    this.route.navigate(['home']);
}
if(url === 'about'){
  this.route.navigate(['about']);
}
if(url === 'contact'){
  this.route.navigate(['contact']);
}
if(url === 'experience'){
  this.route.navigate(['experience']);
}
if(url === 'education'){
  this.route.navigate(['education']);
}
if(url === 'skills'){
  this.route.navigate(['skills']);
}
if(url === 'all-in-one'){
  this.route.navigate(['all-in-one']);
}
  }

}
