import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';  

import {Observable} from 'rxjs/Observable';
import {Job} from '../models/job';
import {Global} from './global';

@Injectable()
export class JobService{
    public url: string;

    constructor(
        private _http:HttpClient
    ){
        this.url = Global.url;
    }

    testService(){
        return 'Angular Work!';
    }

    saveJob(job: Job): Observable<any>{
        let params = JSON.stringify(job);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

            return this._http.post(this.url+'savejob',params,{headers:headers});
    }

    getJobs(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'jobs',{headers:headers});
    }
   
    getJob(id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'job/'+id,{headers:headers});
    }

    deleteJob(id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'job/'+id,{headers:headers});
    }

    updateJob(job):Observable<any>{
        let params = JSON.stringify(job);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url+'job/'+job._id, params ,{headers:headers});
    }

}