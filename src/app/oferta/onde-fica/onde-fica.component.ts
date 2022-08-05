import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';
import { InfoOferta } from 'src/app/shared/como-usar.model';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = "";

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit(): void {
    let id = this.route.parent?.snapshot.params['id'];

    this.ofertasService.getOndeFicaOfertaPorId(id)
      .then((infoOferta: InfoOferta) => {
        this.ondeFica = infoOferta.descricao;
      })
      .catch((params: any) => {
        console.log(params);
      });
  }

}
