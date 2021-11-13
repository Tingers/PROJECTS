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
        return this.http.get<Usuario[]>(`${this.baseURL}/listar`);  
    }

    getById(Id: number): Observable<Usuario>{
        return this.http.get<Usuario>(`${this.baseURL}/listarId/${Id}`);
    }

    create(usuario: Usuario): Observable<Usuario>{
        return this.http.post<Usuario>(`${this.baseURL}/criar`, usuario);
    }

    updateById(Id: number, usuario: Usuario): Observable<Usuario>{
        return this.http.put<Usuario>(`${this.baseURL}/editar/${Id}`, usuario);
    }

    deleteById(Id: number): Observable<Usuario>{
        return this.http.delete<Usuario>(`${this.baseURL}/deletar/${Id}`);
    }

}