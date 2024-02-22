import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private BASE_URL:string ="http://localhost:8080/clientes"
  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'})


  constructor(private http: HttpClient) { }


  addClient(cliente:Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.BASE_URL, cliente, {headers: this.httpHeaders})
  }

  clientList(): Observable<any>{
    return this.http.get(this.BASE_URL)
  }
}