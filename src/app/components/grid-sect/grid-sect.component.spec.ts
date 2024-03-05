import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSectComponent } from './grid-sect.component';

describe('GridSectComponent', () => {
  let component: GridSectComponent;
  let fixture: ComponentFixture<GridSectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridSectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridSectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
