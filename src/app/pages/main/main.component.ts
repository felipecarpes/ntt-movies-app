import { Component } from '@angular/core';
import { HeaderComponent } from "../../layout/header/header.component";
import { FooterComponent } from '../../layout/footer/footer.component';
import { MovieWrapperComponent } from '../../components/movie-wrapper/movie-wrapper.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, MovieWrapperComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
