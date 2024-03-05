import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalSectComponent } from './final-sect.component';

describe('FinalSectComponent', () => {
  let component: FinalSectComponent;
  let fixture: ComponentFixture<FinalSectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalSectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinalSectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
