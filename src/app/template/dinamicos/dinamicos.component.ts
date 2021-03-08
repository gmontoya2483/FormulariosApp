import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: 'Gabriel',
    favoritos: [
      {id: 1, nombre: 'Metal Gear'},
      {id: 2, nombre: 'Call of Duty'}
    ]
  };
  nuevoJuego = '';


  guardar(): void {
    console.log('Formulario Posteado');

  }

  eliminar(index: number): void {
    this.persona.favoritos.splice(index, 1);
  }

  agregarJuego(): void {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    };

    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoJuego = '';

  }
}
