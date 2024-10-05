import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgIf, CommonModule, NgFor],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  contact = {
    name: '',
    phone: '',
    comments: '',
  };

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.showHeader();
  }

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3y7f3x7',
        'template_ena8upc',
        e.target as HTMLFormElement,
        {
          publicKey: 'fH0li1slVuyUkFWbz',
        }
      );

    emailjs.sendForm;
  }

  private showHeader() {
    const headerElement = this.renderer.selectRootElement('#main-header', true);
    this.renderer.setStyle(headerElement, 'display', 'block');
  }
}
