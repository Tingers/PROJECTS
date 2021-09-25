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

    getById(idjogo: number): Observable<Jogo>{
        return this.http.get<Jogo>(`${this.baseURL}/getbyid/${idjogo}`);
    }

    create(jogo: Jogo): Observable<Jogo>{
        return this.http.post<Jogo>(`${this.baseURL}/create`, jogo);
    }

    updateById(idjogo: number, jogo: Jogo): Observable<Jogo>{
        return this.http.put<Jogo>(`${this.baseURL}/updatebyid/${idjogo}`, jogo);
    }

    deleteById(idjogo: number): Observable<Jogo>{
        return this.http.delete<Jogo>(`${this.baseURL}/deletebyid/${idjogo}`);
    }

}