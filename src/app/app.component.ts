import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./component/header/header.component";
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./component/home/home.component";
// import { ResumeComponent } from "./component/resume/resume.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, CommonModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
