import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Jogo } from "../models/jogo";

@Injectable({
    providedIn: 'root'
})

export class JogoService{
    private baseURL = "http://localhost:5000/api/jogo";

    constructor(private http: HttpClient){}

    list(): Observable<Jogo[]>{
        return this.http.get<Jogo[]>(`${this.baseURL}/list`);
    }

    getById(id: number): Observable<Jogo>{
        return this.http.get<Jogo>(`${this.baseURL}/getbyid/${id}`);
    }

    create(jogo: Jogo): Observable<Jogo>{
        return this.http.post<Jogo>(`${this.baseURL}/create`, jogo);
    }

    updateById(id: number, jogo: Jogo): Observable<Jogo>{
        return this.http.put<Jogo>(`${this.baseURL}/updatebyid/${id}`, jogo);
    }

    deleteById(id: number): Observable<Jogo>{
        return this.http.delete<Jogo>(`${this.baseURL}/deletebyid/${id}`);
    }

}