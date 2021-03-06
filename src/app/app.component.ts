import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = 51.678418;
  lng: number = 7.809007;
  usuarios: Observable<any[]>;
  nombre: string;
  siguiendo: boolean = false;

  constructor(private db: AngularFireDatabase){
    this.usuarios = db.list('usuarios').valueChanges();
  }

  elegir(usuario:any){
    this.nombre = usuario.nombre;
    this.lat = usuario.latitud;
    this.lng = usuario.longitud;
  }
}
