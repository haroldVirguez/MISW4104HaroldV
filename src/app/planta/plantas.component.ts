import { Component, OnInit } from '@angular/core';
import { PlantaService } from './planta.service';
import { Planta } from './planta';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {
  plantas: Planta[] = [];
  error: boolean = false;
  totalInterior: number = 0;
  totalExterior: number = 0;

  constructor(private plantaService: PlantaService) {}

  ngOnInit(): void {
    this.plantaService.getPlantas().subscribe({
      next: (data) => {
        this.plantas = data;
        this.calcularTotales();
      },
      error: () => {
        this.error = true;
      }
    });
  }

  private calcularTotales(): void {
    this.totalInterior = this.plantas.filter(planta => planta.tipo === 'Interior').length;
    this.totalExterior = this.plantas.filter(planta => planta.tipo === 'Exterior').length;
  }
}
