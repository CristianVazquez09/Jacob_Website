import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Renderer2,
} from '@angular/core';
import { HomeComponent } from '../home/home.component';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { DropdowMenuComponent } from '../dropdow-menu/dropdow-menu.component';
import { NgClass } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HomeComponent, RouterOutlet,RouterLink, DropdowMenuComponent, NgClass],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent{
  isVisible: boolean = true;
  

  constructor() {}


  


  showMenu() {
    this.isVisible=false;
  }


  hideMenu(e:boolean){
    
    this.isVisible=e;
  }
}
