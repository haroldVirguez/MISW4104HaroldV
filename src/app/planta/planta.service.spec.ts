import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PlantaService } from './planta.service';
import { Planta } from './planta';
import { environment } from '../../environments/environment.development';

describe('PlantaService', () => {
  let service: PlantaService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantaService]
    });

    service = TestBed.inject(PlantaService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch plantas', () => {
    const mockPlantas: Planta[] = [
      {
        nombre_comun: 'Planta A', tipo: 'Tipo 1', clima: 'Clima 1',
        id: 0,
        nombre_cientifico: '',
        altura_maxima: 0,
        sustrato_siembra: ''
      },
      {
        nombre_comun: 'Planta B', tipo: 'Tipo 2', clima: 'Clima 2',
        id: 0,
        nombre_cientifico: '',
        altura_maxima: 0,
        sustrato_siembra: ''
      }
    ];

    service.getPlantas().subscribe(plantas => {
      expect(plantas.length).toBe(2);
      expect(plantas).toEqual(mockPlantas);
    });

    const req = httpTestingController.expectOne(environment.baseUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockPlantas);
  });
});
