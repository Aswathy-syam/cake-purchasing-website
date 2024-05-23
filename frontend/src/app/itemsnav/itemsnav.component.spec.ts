import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsnavComponent } from './itemsnav.component';

describe('ItemsnavComponent', () => {
  let component: ItemsnavComponent;
  let fixture: ComponentFixture<ItemsnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsnavComponent]
    });
    fixture = TestBed.createComponent(ItemsnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
