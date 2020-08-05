import { Component, OnInit } from '@angular/core';
import {Job} from '../../models/job';
import {JobService} from '../../services/job.service';
import {Global} from '../../services/global';
  import { from } from 'rxjs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers: [JobService]
})
export class JobsComponent implements OnInit {
  public jobs: Job[];
  constructor(private _jobService: JobService) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(){
    this._jobService.getJobs().subscribe(
      response =>{
        if(response.jobs){
          this.jobs = response.jobs;
        }
        
      }
      ,
      error =>{
        console.log(<any>error);
      } 
    );
  }

}
