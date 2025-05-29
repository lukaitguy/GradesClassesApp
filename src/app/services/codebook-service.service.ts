import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

export interface SelectOption{
  id: number,
  naziv: string;
}

export interface GradesFormOptions{
  programi: SelectOption[];
  razredi: SelectOption[];
  skolskeGodine: SelectOption[];
}
export interface ClassesFormOptions{
  prviStraniJezik: SelectOption[];
  jezikNastave: SelectOption[];
  vrstaOdeljenja: SelectOption[];
}

@Injectable({
  providedIn: 'root'
})
export class CodebookServiceService {

  constructor() { }

  private http = inject(HttpClient);
  private API_URL = environment.API_URL + '/api/codebook';

  getGradeFormOptions(): Observable<GradesFormOptions>{
    return this.http.get<GradesFormOptions>(this.API_URL + "/grade-form");
  }
  getClassesFormOptions(): Observable<ClassesFormOptions>{
    return this.http.get<ClassesFormOptions>(this.API_URL + "/classes-form");
  }
}
