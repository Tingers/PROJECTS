import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PerfilMoba } from "../models/perfilMoba";

@Injectable({
    providedIn: 'root'
})

export class PerfilMobaService{
    private baseURL = "http://localhost:5000/api/perfilMoba";

    constructor(private http: HttpClient){}

    list(): Observable<PerfilMoba[]>{
        return this.http.get<PerfilMoba[]>(`${this.baseURL}/listar`);
    }

    getById(Id: number): Observable<PerfilMoba>{
        return this.http.get<PerfilMoba>(`${this.baseURL}/ListarId/${Id}`);
    }

    create(PerfilMoba: PerfilMoba): Observable<PerfilMoba>{
        return this.http.post<PerfilMoba>(`${this.baseURL}/criar`, PerfilMoba);
    }

}