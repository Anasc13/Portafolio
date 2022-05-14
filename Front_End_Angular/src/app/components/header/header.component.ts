import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title:string = 'Experiencias laborales';
  showAddJob: boolean = false;
  subscription?: Subscription;

  constructor(
    private uiService: UiService,
    private router: Router
  ) { 
    this.subscription = this.uiService.onToggle()
    .subscribe((value) => this.showAddJob = value )
}

  ngOnInit(): void {
  }

  toggleAddJob(){
    this.uiService.toggleAddJob();
  }

  hasRoute(router: string){
    return this.router.url === router
  }
}
