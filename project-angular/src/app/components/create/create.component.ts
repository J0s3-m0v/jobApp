import { Component, OnInit } from '@angular/core';
import {Job} from '../../models/job';
import {JobService} from '../../services/job.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [JobService]
})

export class CreateComponent implements OnInit {

  public name: string;
  public job: Job;
  public status: string;

  constructor(private _jobService: JobService) {
      this.name = "Create a New Job";
      this.job = new Job('','','','','');
   }

  ngOnInit(): void {
    
  }

  onSumbit(form){
      console.log(this.job);
      this._jobService.saveJob(this.job).subscribe(
        response => {
          if (response.job){
            this.status='success';
          }
          else{
            this.status='failed';
          }
        },
        error => {
          console.log(<any>error);
        }
      );
  }

}
