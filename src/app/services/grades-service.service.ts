import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Grade } from '../models/grade-model';
import { environment } from '../../environments/environment.development';

export interface GradeCreateRequest{
  programId: number,
  razredId: number,
  skolskaGodinaId: number,
}

@Injectable({
  providedIn: 'root'
})
export class GradesServiceService {

  constructor() { }

  private http = inject(HttpClient);
  private apiUrl = environment.API_URL + '/api/grades';

  getGradesPaged(pageNumber: number, pageSize: number) {
  return this.http.get<{ grades: Grade[], totalCount: number }>(
    this.apiUrl + `/paged?pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
}
  // public get(): Observable<Grade[]>{
  //   return this.http.get(this.apiUrl) as Observable<Grade[]>;
  // }

  createGrade(data: GradeCreateRequest): Observable<Grade>{
    return this.http.post<Grade>(this.apiUrl, data).pipe(
      catchError(error => {
        console.error("Error creating grade:", error);
        return throwError(error);
      })
  );
  }

  getGradeById(id: number): Observable<Grade>{
    return this.http.get(this.apiUrl + `/${id}`) as Observable<Grade>;
  }
}
