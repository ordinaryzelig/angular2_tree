import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tree',
  template: `
    {{node.name}}
    <ul>
      <li *ngFor="let child of node.children">
        <tree [node]="child"></tree>
      </li>
    </ul>
    <a (click)="addChild()">+ child</a> |
    <a (click)="log()">log tree</a>
  `,
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  @Input() node: any;

  constructor() { }

  ngOnInit() {
  }

  log() {
    console.log(this.node);
  }

  addChild() {
    this.node.children.push({name: 'new kid', children: []});
  }
}
