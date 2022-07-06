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

  private apiUrl = 'http://localhost:5001/'

  constructor(private http:HttpClient) { }

obtenerDatos(): Observable<any> {
  return this.http.get(this.apiUrl)
}

agregarDatos(): Observable<any>{
  return this.http.post<any>(this.apiUrl, httpOptions);
}

borrarDatos(){
  return this.http.delete<any>(this.apiUrl)
}

} 
