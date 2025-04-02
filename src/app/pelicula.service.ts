import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { Pelicula, PeliculaCreacion } from './pelicula.models';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor() { }
  private http = inject(HttpClient);
  private URLbase = environment.apiURL + '/api/Pelicula';

  public crear(peli: PeliculaCreacion){
    return this.http.post(this.URLbase, peli);
  }
  
  public obtener(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.URLbase);
  }

  public editar(peli: Pelicula){
    return this.http.put(this.URLbase, peli);
  }

  public eliminar(id: number){
    return this.http.delete(`${this.URLbase}/${id}`);
  }
}
