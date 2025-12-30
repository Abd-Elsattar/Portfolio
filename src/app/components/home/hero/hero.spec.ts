import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hero } from './hero';
import { DataService } from '../../../services/data.service';
import { TerminalService } from '../../../services/terminal.service';
import { signal } from '@angular/core';

class MockDataService {
  profile = signal({ 
    name: 'Test Name',
    role: 'Test Role',
    headline: 'Test Headline',
    subHeadline: 'Test SubHeadline',
    location: 'Test Location',
    email: 'test@example.com',
    linkedin: 'test-linkedin',
    github: 'test-github'
  });
}

class MockTerminalService {
  terminalLines = signal([]);
  currentCommand = signal('');
  isTyping = signal(false);
  
  runSequence() { 
    return Promise.resolve(); 
  }
}

describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero],
      providers: [
        { provide: DataService, useClass: MockDataService },
        { provide: TerminalService, useClass: MockTerminalService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
