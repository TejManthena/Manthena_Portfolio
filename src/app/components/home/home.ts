import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { Experience } from '../experience/experience';
import { Projects } from '../projects/projects';

@Component({
  selector: 'app-home',
  imports: [Hero, Experience, Projects],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
