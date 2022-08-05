import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';
import { InfoOferta } from 'src/app/shared/como-usar.model';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = "";

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit(): void {
    let id = this.route.parent?.snapshot.params['id'];

    this.ofertasService.getComoUsarOfertaPorId(id)
      .then((infoOferta: InfoOferta) => {
        this.comoUsar = infoOferta.descricao;
      })
      .catch((params: any) => {
        console.log(params);
      });
  }
}
