import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantasComponent } from './plantas.component';
import { PlantaService } from './planta.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PlantasComponent', () => {
  let component: PlantasComponent;
  let fixture: ComponentFixture<PlantasComponent>;
  let plantaService: PlantaService;

  beforeEach(() => {
    const plantaServiceMock = {
      getPlantas: jasmine.createSpy('getPlantas').and.returnValue(of([]))
    };

    TestBed.configureTestingModule({
      declarations: [PlantasComponent],
      providers: [{ provide: PlantaService, useValue: plantaServiceMock }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantasComponent);
    component = fixture.componentInstance;
    plantaService = TestBed.inject(PlantaService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call PlantaService.getPlantas on init', () => {
    component.ngOnInit();
    expect(plantaService.getPlantas).toHaveBeenCalled();
  });

});
