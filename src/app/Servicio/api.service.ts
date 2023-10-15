import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' :'*'
    })
  }

  // Se establece la base url del API a consumir
  // apiURL = 'https://jsonplaceholder.typicode.com'; // Fuente Original funciona solo get
  apiURL = 'http://192.168.100.11:3000'; // Ejecuta json-server -H ip .\db.json para ejecutar un Fake APIRest
  constructor(private http:HttpClient) { }
  getUsuario(userId:number):Observable<any>{
    return this.http.get(this.apiURL+'/users/'+userId).pipe(
      retry(3)
    );
  }
  getUsuarios():Observable<any>{
    return this.http.get(this.apiURL+'/users/').pipe(
      retry(3)
    );
  }
  getPosts():Observable<any>{
    return this.http.get(this.apiURL+'/posts/').pipe(
      retry(3)
    );
  }
  getPost(id:number):Observable<any>{
    return this.http.get(this.apiURL+'/posts/'+id).pipe(
      retry(3)
    );
  }
  createPost(post:string):Observable<any>{
    return this.http.post(this.apiURL+'/posts',post,this.httpOptions)
    .pipe(
      retry(3)
    );
  }
  updatePost(id:number,post:string):Observable<any>{
    return this.http.put(this.apiURL+'/posts/'+id,post,this.httpOptions).pipe(retry(3));
  }
  deletePost(id:number):Observable<any>{
    return this.http.delete(this.apiURL+'/posts/'+id,this.httpOptions);
  }
}