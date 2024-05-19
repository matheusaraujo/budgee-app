import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GetBalanceComponent } from "./get-balance.component";

describe("ViewBalanceComponent", () => {
  let component: GetBalanceComponent;
  let fixture: ComponentFixture<GetBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetBalanceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GetBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
