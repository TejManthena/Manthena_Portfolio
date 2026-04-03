import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Footer } from './components/footer/footer';
import { Resume } from './components/resume/resume';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Experience, Resume, Projects, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio-app');
}
