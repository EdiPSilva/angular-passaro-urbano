import { Oferta } from "./shared/oferta.model";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { API_OFERTAS, API_COMO_USAR } from "./shared/api";
import { ComoUsar } from "./shared/como-usar.model";

@Injectable()//Permite que receba um serviço externo
export class OfertasService {

    constructor(private http: HttpClient) {}

    public getOfertas(): Promise<Array<Oferta>> {
        return this.http.get(API_OFERTAS + "?destaque=true").toPromise().then((resposta: any) => resposta);
    }

    public getOfertasPorCategoria(categoria: string): Promise<Array<Oferta>> {
        return this.http.get(API_OFERTAS + `?categoria=${categoria}`).toPromise().then((resposta: any) => resposta);
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(API_OFERTAS + `?id=${id}`).toPromise().then((resposta: any) => resposta[0]);
    }

    public getComoUsarOfertaPorId(id: number): Promise<ComoUsar> {
        return this.http.get(API_COMO_USAR + `?id=${id}`).toPromise().then((resposta: any) => resposta[0]);
    }
}