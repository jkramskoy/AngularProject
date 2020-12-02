import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<h1>{{ title }}</h1>',
  //template: '<h1>{{ title? title: "No Title" }}</h1>',
  /*
  template: `
  <h1>
  {{ title? title: "No Title" }}
  </h1>
  <img src='{{imagePath}}' /> <br/>
  <img [src]='imagePath' /> <br/>
  <h2>{{ getFullName() }}</h2>
  <button disabled ='{{isDisabled}}'>Click Me</button><br/>
  <button [disabled] ='isDisabled'>Click Me</button><br/>

  <span innerHtml={{title}}></span><br />
  <span bind-innerHtml=title></span><br />

  <table border ='1'>
  <tr>
  <td attr.colspan = '{{colSpan }}'>Just one collom</td>
  </tr>
  <tr>column#1</tr>
  <tr>column#2</tr>
  </table>
  
  `,
  */
  
  
  
  //template: '<h1>Hello Word</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colSpan = 2;

  title = 'AngularProject';
  imagePath: string = 'https://www.google.com/logos/doodles/2020/december-holidays-day-1-6753651837108829.5-s.png'

  firstName: string = 'Mark';
  lastName : string = 'Smith';

 // isDisabled = true;
 isDisabled = false;

  getFullName(): string {
    return this.firstName + " " + this.lastName;
    }

}
