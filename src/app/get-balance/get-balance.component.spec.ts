import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ViewBalanceComponent } from "./get-balance.component";

describe("ViewBalanceComponent", () => {
  let component: ViewBalanceComponent;
  let fixture: ComponentFixture<ViewBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewBalanceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
