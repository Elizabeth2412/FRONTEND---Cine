import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Sala, SalaCreacion } from '../sala.models';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SalaService {
  
  constructor() { }
  private http = inject(HttpClient);
  private URLbase = environment.apiURL + '/api/Sala';

  public crear(sala: SalaCreacion){
    return this.http.post(this.URLbase, sala);
  }
  
  public obtener(): Observable<Sala[]> {
    return this.http.get<Sala[]>(this.URLbase);
  }

  public editar(sala: Sala){
    return this.http.put(this.URLbase, sala);
  }
  
  public eliminar(id: number){
    return this.http.delete(`${this.URLbase}/${id}`);
  }
}
