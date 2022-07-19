import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualizerComponent } from './virtualizer.component';

describe('VirtualizerComponent', () => {
  let component: VirtualizerComponent;
  let fixture: ComponentFixture<VirtualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
