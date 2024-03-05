import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NewsletterFormComponent } from '../newsletter-form/newsletter-form.component';
import { GridSectComponent } from '../grid-sect/grid-sect.component';
import { FinalSectComponent } from '../final-sect/final-sect.component';
import { RodapeComponent } from '../rodape/rodape.component';

@Component({
  selector: 'app-home',  //Selector indica como vou referenciar essa componente, em outro componente.
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, BtnPrimaryComponent, NewsletterFormComponent, GridSectComponent, FinalSectComponent, RodapeComponent], //As coisas que vai precisar usar, colocar aqui, componentes do Angular
  providers: [],
  templateUrl: './home.component.html', //Aqui indica onde fica o conteudo html desse componente
  styleUrl: './home.component.scss'  //Onde fica o estilo
})
export class HomeComponent {

}
