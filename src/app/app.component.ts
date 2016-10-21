import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <tree [node]="node"></tree>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  node = {
    name: 'gramps',
    children: [
      {name: 'dad', children: [
        {name: 'me', children: []},
        {name: 'sis', children: []},
      ]},
      {name: 'aunt', children: [
        {name: 'cuz', children: []},
      ]},
    ],
  };
}
