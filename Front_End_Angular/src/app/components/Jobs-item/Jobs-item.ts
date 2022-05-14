import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Job} from '../Jobs'
import {JOBS} from '../mock-jobs'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-jobs-item',
  templateUrl: './Jobs-item.html',
  styleUrls: ['./Jobs-item.css']
})
export class JobsItem implements OnInit {
  @Input() job: Job = JOBS[0]
  @Output() OnDeleteJob: EventEmitter<Job> = new EventEmitter()
  @Output() OnToggleEdit: EventEmitter<Job> = new EventEmitter()
  
  faTimes = faTimes;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  onDelete(job: Job) {
    this.OnDeleteJob.emit(job);
  }
  
  onToggle(job: Job) {
    this.OnToggleEdit.emit(job);
  }
  
}
