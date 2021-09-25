import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../models/usuario";

@Injectable({
    providedIn: "root"
})
export class UsuarioService{
    private baseURL = "http://localhost:5000/api/usuario";

    constructor(private http: HttpClient){}

    list(): Observable<Usuario[]>{
        return this.http.get<Usuario[]>(`${this.baseURL}/list`);
    }

    getById(idusuario: number): Observable<Usuario>{
        return this.http.get<Usuario>(`${this.baseURL}/getbyid/${idusuario}`);
    }

    create(usuario: Usuario): Observable<Usuario>{
        return this.http.post<Usuario>(`${this.baseURL}/create`, usuario);
    }

    updateById(idusuario: number, usuario: Usuario): Observable<Usuario>{
        return this.http.put<Usuario>(`${this.baseURL}/updatebyid/${idusuario}`, usuario);
    }

    deleteById(idusuario: number): Observable<Usuario>{
        return this.http.delete<Usuario>(`${this.baseURL}/deletebyid/${idusuario}`);
    }

}