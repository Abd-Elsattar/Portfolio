import { Component } from '@angular/core';
import { Header } from './components/layout/header/header';
import { Footer } from './components/layout/footer/footer';
import { Hero } from './components/home/hero/hero';
import { Mindset } from './components/home/mindset/mindset';
import { ProjectList } from './components/projects/project-list/project-list';
import { SkillsGroup } from './components/skills/skills-group/skills-group';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    Footer,
    Hero,
    Mindset,
    ProjectList,
    SkillsGroup,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
