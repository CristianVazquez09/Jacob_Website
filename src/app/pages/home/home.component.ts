import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DropdowMenuComponent } from '../dropdow-menu/dropdow-menu.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, DropdowMenuComponent, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  isVisible: boolean = true;

  constructor(private renderer: Renderer2, private el: ElementRef) {}
  ngOnInit(): void {
    const headerElement = this.renderer.selectRootElement('#main-header', true);
    

    // Elimina el elemento header del DOM
    this.renderer.setStyle(headerElement, 'display', 'none');
    
  }

  showMenu() {
    this.isVisible=false;
  }


  hideMenu(e:boolean){
    
    this.isVisible=e;
  }

}
