import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamemobileComponent } from './gamemobile.component';

describe('GamemobileComponent', () => {
  let component: GamemobileComponent;
  let fixture: ComponentFixture<GamemobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamemobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamemobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
