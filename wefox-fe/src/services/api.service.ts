import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from 'src/types';


@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  API_URL = 'http://localhost:3000/api/v1/posts'

  getElements(){
    return this.http.get<City[]>(this.API_URL)
  }

}
