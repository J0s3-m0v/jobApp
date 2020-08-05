import { Component, OnInit } from '@angular/core';
import {Job} from '../../models/job';
import {JobService} from '../../services/job.service';
import {Global} from '../../services/global';
import {Router,ActivatedRoute,Params} from '@angular/router'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [JobService]
})
export class DetailComponent implements OnInit {
  public url:string;
  public job:Job;
  constructor(
    private _jobService: JobService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.url=Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id = params.id;
      this.getJob(id);
    });
  }

  getJob(id){
    this._jobService.getJob(id).subscribe(
      response =>{
        this.job=response.job;
      },
      error => {
        console.log(<any>error);
      }
      
    )
  }

}
