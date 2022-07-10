import { Oferta } from "./shared/oferta.model";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";


@Injectable()//Permite que receba um serviço externo
export class OfertasService {

    private endpoint: string = "http://localhost:3000/ofertas";

    constructor(private http: HttpClient) {}

    public getOfertas(): Promise<Array<Oferta>> {
        return this.http.get(this.endpoint+"?destaque=true").toPromise().then((resposta: any) => resposta);
    }

    public getOfertasPorCategoria(categoria: string): Promise<Array<Oferta>> {
        return this.http.get(this.endpoint+`?categoria=${categoria}`).toPromise().then((resposta: any) => resposta);
    }
}