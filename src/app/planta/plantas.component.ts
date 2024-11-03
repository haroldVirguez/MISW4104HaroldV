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

  constructor(private plantaService: PlantaService) {}

  ngOnInit(): void {
    this.plantaService.getPlantas().subscribe({
      next: (data) => {
        this.plantas = data;
      },
      error: () => {
        this.error = true;
      }
    });
  }
}
