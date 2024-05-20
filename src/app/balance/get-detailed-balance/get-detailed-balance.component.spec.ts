import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDetailedBalanceComponent } from './get-detailed-balance.component';

describe('GetDetailedBalanceComponent', () => {
  let component: GetDetailedBalanceComponent;
  let fixture: ComponentFixture<GetDetailedBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDetailedBalanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetDetailedBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
