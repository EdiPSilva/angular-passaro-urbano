import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];

    this.ofertasService.getOfertaPorId(id)
      .then((oferta: Oferta) => {
        this.oferta = oferta;
      })
      .catch((params: any) => {
        console.log(params);
      });
  }
}
