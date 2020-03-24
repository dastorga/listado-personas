import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';

import { JsonService } from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Componente Principal';
  personas: Persona[] = [];
  productos: any[] = [];

  constructor(
    protected jsonService: JsonService
  ) {}

  onPersonaAgregada(persona: Persona) {
    this.personas.push(persona);

  }

  ngOnInit() {
  }
}


