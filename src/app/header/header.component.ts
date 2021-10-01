import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen = this.dialog.toOpen();
  
  constructor(public dialog: DialogComponent) { }


  ngOnInit(): void {

  }

}
