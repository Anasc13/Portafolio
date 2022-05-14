import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { Job } from '../components/Jobs'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})

export class JobService {
  private apiUrl = 'http://localhost:5001/jobs'

  constructor(
    private http:HttpClient
  ) { }

  getJobs(): Observable<Job[]>{
    return this.http.get<Job[]>(this.apiUrl)
  }
  deleteJob(job:Job): Observable<Job>{
    const url = `${this.apiUrl}/${job.id}`
    return this.http.delete<Job>(url)
  }

  updateJobEdit (job:Job): Observable<Job>{
    const url = `${this.apiUrl}/${job.id}`
    return this.http.put<Job>(url, job, httpOptions)
  }

  AddJob(job:Job): Observable<Job>{
    return this.http.post<Job>(this.apiUrl, job, httpOptions);
  }
}