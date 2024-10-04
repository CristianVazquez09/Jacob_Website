import { NgClass } from '@angular/common';
import { Component,EventEmitter, Output, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dropdow-menu',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './dropdow-menu.component.html',
  styleUrl: './dropdow-menu.component.css'
})
export class DropdowMenuComponent {
  
  @Output()
  isVisible = new EventEmitter<boolean>();


  constructor(private renderer: Renderer2) {}

  hide(){
    this.isVisible.emit(true);
  }


}
