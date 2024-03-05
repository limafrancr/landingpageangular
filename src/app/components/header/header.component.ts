import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common' //Ela carrega as imagens de forma assíncrona, o que significa que o navegador não precisa esperar que todas as imagens sejam carregadas antes de renderizar a página.


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
