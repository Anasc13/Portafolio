import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddJob:boolean = false;
  private subjet = new Subject<any>();

  constructor() { }

  toggleAddJob(): void {
    this.showAddJob = !this.showAddJob;
    this.subjet.next(this.showAddJob);
  }

  onToggle(): Observable<any> {
    return this.subjet.asObservable();
  }
}