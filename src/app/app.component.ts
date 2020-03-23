import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { JsonService } from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Catalogo de Productos';
  personas: Persona[] = [new Persona("Juan", "Perez"), new Persona("Jose", "Gonzalez")];
  productos: any[] = [];

  constructor(
    protected jsonService: JsonService
  ) {}

  onPersonaAgregada(persona: Persona) {
    this.personas.push(persona);

  }

  ngOnInit() {
    this.jsonService.getJsonServer()
    .subscribe(
      (data) => { // Success
        console.log(data)
      },
      (error) => {
        console.error(error);
      }
    );
  }




}


