import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validateHeaderName } from 'http';

@Component({
  selector: 'app-newsletter-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {
  // newsletterForm!: FormGroup;

  // constructor() {
  //   this.newsletterForm = new FormGroup({
  //     name: new FormControl('', [Validators.required]),
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //   });
  // }

  //  onsubmit()
  //    {
  //      console.log(this.newsletterForm.value)
  //    }
}