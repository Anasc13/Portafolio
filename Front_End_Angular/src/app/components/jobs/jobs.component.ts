import { Component, OnInit } from '@angular/core';
import { JobService } from '../../service/job.service';
import {Job} from '../Jobs'

@Component({
  selector: 'app-tasks',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: Job[] = [];
  
  constructor(
    private jobService: JobService
  ) { }

  ngOnInit(): void {
    // Like Promise
    this.jobService.getJobs().subscribe((jobs)=>(
      this.jobs = jobs
    ));
  }

  deleteJob(job:Job){
    this.jobService.deleteJob(job)
    .subscribe(()=>(
      this.jobs = this.jobs.filter( j => j.id !== job.id )
    ))
  }

  toggleEdit(job:Job): void{
    job.edit = !job.edit
    this.jobService.updateJobEdit(job).subscribe();
  }

  AddJob (job:Job): void{
  this.jobService.AddJob(job).subscribe((job)=>( 
    this.jobs.push(job))
  )
}
}
