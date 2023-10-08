import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from 'src/types';


@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  API_URL = 'http://localhost:3000/api/v1/posts'

  //   -> list
  // endpoint: /api/v1/posts
  // method: GET
  // body : not needed
  // response code: 200
  getElements(){
    return this.http.get<City[]>(this.API_URL)
  }
  // -> show
  // endpoint: /api/v1/posts/:id
  // method: GET
  // body : not needed
  // response code: 200
  showElement(id: string){
    return this.http.get<City>(this.API_URL + `/${id}`)
  }
  // -> create
  // endpoint: /api/v1/posts
  // method: POST
  // body : json
  // response code: 201
  createElement(element: City){
    return this.http.post(this.API_URL, element)
  }
  // -> update
  // endpoint: /api/v1/posts/:id
  // method: PUT
  // body : json
  // response code: 200
  updateElement(element: City){
    return this.http.put(this.API_URL + `/${element.id}`, element)
  }
  // -> remove
  // endpoint: /api/v1/posts/:id
  // method: DELETE
  // body : not needed
  // response code: 204
  removeElement(id: string){
    return this.http.delete(this.API_URL + `/${id}`)
  }

}
