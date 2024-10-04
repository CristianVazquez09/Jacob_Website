import { NgClass } from '@angular/common';
import { compileNgModule } from '@angular/compiler';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  // Inicializamos el botón seleccionado en "2" (Frutas)
  selectedButton: number = 2;

  // Elementos visibles, se ocultan los otros
  visibleContainers: { [key: number]: string } = {
    1: 'container-verduras',
    2: 'container-frutas',
    3: 'container-legumbres'
  };

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.showHeader();
  }

  changeOrder(number: number) {
    this.selectedButton = number;
    const element1 = this.el.nativeElement.querySelector('#element-1');
    const element2 = this.el.nativeElement.querySelector('#element-2');
    const element3 = this.el.nativeElement.querySelector('#element-3');

    // Resetear clases a los botones
    this.resetButtonStyles([element1, element2, element3]);

    // Cambiar el orden basado en el número seleccionado
    if (number === 1) {
      this.setButtonOrder(element1, element2, element3, 2, 1, 3);
    } else if (number === 2) {
      this.setButtonOrder(element1, element2, element3, 1, 2, 3);
    } else if (number === 3) {
      this.setButtonOrder(element1, element2, element3, 1, 3, 2);
    }

    // Manejar la visibilidad de los contenedores
    this.toggleContainerVisibility(number);
  }

  // Función para restablecer estilos
  private resetButtonStyles(elements: any[]) {
    elements.forEach((element) => {
      this.renderer.addClass(element, 'text-blue-j-200');
      this.renderer.addClass(element, 'text-xl');
      this.renderer.addClass(element, 'lg:text-3xl');
    });
  }

  // Función para cambiar el orden de los botones
  private setButtonOrder(element1: any, element2: any, element3: any, order1: number, order2: number, order3: number) {
    this.renderer.setStyle(element1, 'order', order1);
    this.renderer.setStyle(element2, 'order', order2);
    this.renderer.setStyle(element3, 'order', order3);

    // Quitar clases del botón seleccionado (el del medio)
    if (order2 === 2) {
      this.renderer.removeClass(element2, 'text-blue-j-200');
      this.renderer.removeClass(element2, 'text-xl');
    } else if (order2 === 1) {
      this.renderer.removeClass(element1, 'text-blue-j-200');
      this.renderer.removeClass(element1, 'text-xl');
    } else {
      this.renderer.removeClass(element3, 'text-blue-j-200');
      this.renderer.removeClass(element3, 'text-xl');
    }
  }

  // Función para manejar la visibilidad de los contenedores
  private toggleContainerVisibility(selected: number) {
    Object.keys(this.visibleContainers).forEach((key) => {
      const container = this.el.nativeElement.querySelector(`#${this.visibleContainers[+key]}`);
      if (+key === selected) {
        this.renderer.removeClass(container, 'hidden');
      } else {
        this.renderer.addClass(container, 'hidden');
      }
    });
  }


  private showHeader(){
    const headerElement = this.renderer.selectRootElement('#main-header', true);
    this.renderer.setStyle(headerElement, 'display', 'block');
  }
  
  


}
