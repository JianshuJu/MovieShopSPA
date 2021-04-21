import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http: HttpClient) {
  }
  getAll(path: string): Observable<any[]> {
    return this.http.get(`${environment.apiUrl}${path}`)
      .pipe(
        map(resp => resp as any[])
      )
  }
  getById(path: string, id?: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}` + '/' + id)
      .pipe(
        resp => resp as any
      );
  }
  create(path: string, resource: any, options?: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}${path}`, resource).pipe(
      map(resp => resp)
    )
  }
}
