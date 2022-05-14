import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { Job } from '../Jobs';


@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})

export class AddJobComponent implements OnInit {
  @Output() onAddJob: EventEmitter<Job> = new EventEmitter();

  empresa: string = '';
  puesto: string = '';
  periodo: string = '';
  tareas: string = '';
  edit: boolean = false;
  showAddJob: boolean = false;
  subscription?: Subscription;

  constructor(private uiService: UiService
  ) {
    this.subscription = this.uiService.onToggle()
      .subscribe(value => this.showAddJob = value);
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.puesto.length == 0) {
      alert('Please add a job!');
      return;
    }
    const { empresa, puesto, periodo, tareas, edit } = this;
    const newJob = { empresa, puesto, periodo, tareas, edit };

    this.onAddJob.emit(newJob);
  }
}
