import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

obtenerDatos(): Observable<any> {
  return this.http.get('./assets/data/data.json')
}

agregarDatos(): Observable<any>{
  return this.http.post<any>('./assets/data/data.json', httpOptions);
}

borrarDatos(){
  return this.http.delete<any>('./assets/data/data.json')
}
}
