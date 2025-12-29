import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsGroup } from './skills-group';

describe('SkillsGroup', () => {
  let component: SkillsGroup;
  let fixture: ComponentFixture<SkillsGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsGroup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
