import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  name = 'Md. Abdur Rahman';
  department = 'Electrical and Computer Engineering';
  university = 'RUET';
  address = 'Pabna, Rajshahi, Bangladesh';
  mobile = '+88 01714042230';
  email = 'abdurrahmanrussel77@gmail.com';
  expertise = ['HTML', 'CSS', 'JavaScript', 'React JS', 'Angular', 'Node JS'];
}
