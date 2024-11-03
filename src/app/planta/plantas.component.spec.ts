import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantasComponent } from './plantas.component';
import { PlantaService } from './planta.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Planta } from './planta';

describe('PlantasComponent', () => {
  let component: PlantasComponent;
  let fixture: ComponentFixture<PlantasComponent>;
  let plantaService: PlantaService;

  const mockPlantas: Planta[] = [
    {
      nombre_comun: 'Planta Interior 1', tipo: 'Interior', clima: 'Tropical',
      id: 0,
      nombre_cientifico: '',
      altura_maxima: 0,
      sustrato_siembra: ''
    },
    {
      nombre_comun: 'Planta Interior 2', tipo: 'Interior', clima: 'Tropical',
      id: 0,
      nombre_cientifico: '',
      altura_maxima: 0,
      sustrato_siembra: ''
    },
    {
      nombre_comun: 'Planta Exterior 1', tipo: 'Exterior', clima: 'Seco',
      id: 0,
      nombre_cientifico: '',
      altura_maxima: 0,
      sustrato_siembra: ''
    },
  ];

  const plantaServiceMock = {
    getPlantas: jasmine.createSpy('getPlantas').and.returnValue(of(mockPlantas))
  };

  beforeEach(() => {
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

  it('should assign plantas on successful service call', () => {
    component.ngOnInit();
    expect(component.plantas).toEqual(mockPlantas);
    expect(component.totalInterior).toBe(2);
    expect(component.totalExterior).toBe(1);
  });
});
