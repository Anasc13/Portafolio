import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Acerca } from 'F:/GIT/Portafolio/Front_End/Portfolio/src/app/acerca/acerca';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EditService {
  private apiUrl = 'http://localhost:5001/Acerca'
  
  constructor(private http:HttpClient) { }

  getAcerca(): Observable<Acerca>{
    return this.http.get<Acerca>(this.apiUrl)
  }

  deleteAcerca(acerca:Acerca): Observable<Acerca>{
    const url = `${this.apiUrl}/${acerca.about}`
    return this.http.delete<Acerca>(url)
  }

  AddAcerca(acerca:Acerca): Observable<Acerca>{
    return this.http.post<Acerca>(this.apiUrl, acerca, httpOptions);
  }

}