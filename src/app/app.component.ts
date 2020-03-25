import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { JsonService } from './json.service';
import { FirebaseService } from './firebase.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  titulo = 'Componente Principal';
  personas: Persona[] = [];
  productos: any[] = [];

  items: Observable<any[]>;

  constructor(
    protected jsonService: JsonService,
    protected firebaseService: FirebaseService,
    firestore: AngularFirestore
  ) {
    this.items = firestore.collection('productos').valueChanges();
  }


  onPersonaAgregada(persona: Persona) {
    this.personas.push(persona);

  }

  ngOnInit() {

  }
}


