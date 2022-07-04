import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ButtonService {
   
  private showLogIn:boolean = false;
  private editbutton:boolean = true;
  private subjet = new Subject<any>();

  constructor() { }

togglelogIn(): void {
  this.showLogIn = !this.showLogIn;
  this.subjet.next(this.showLogIn);
}

onToggle(): Observable<any> {
  return this.subjet.asObservable();
}

toggleEdit(): void {
  this.editbutton = !this.editbutton;
  this.subjet.next(this.editbutton);
}

}
