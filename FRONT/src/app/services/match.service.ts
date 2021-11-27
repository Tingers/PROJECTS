import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PerfilMoba } from "../models/perfilMoba";

@Injectable({
    providedIn: 'root'
})

export class MatchService{
    private baseURL = "http://localhost:5000/api/match";

    constructor(private http: HttpClient){}

    // list(): Observable<PerfilMoba[]>{
    //     return this.http.get<PerfilMoba[]>(`${this.baseURL}/listar`);
    // }

    getById(Id: number): Observable<PerfilMoba[]>{
        return this.http.get<PerfilMoba[]>(`${this.baseURL}/getById/${Id}`);
    }

    getAll(eloLOL: string): Observable<PerfilMoba[]>{
        return this.http.get<PerfilMoba[]>(`${this.baseURL}/getAll/${eloLOL}`);
    }

}