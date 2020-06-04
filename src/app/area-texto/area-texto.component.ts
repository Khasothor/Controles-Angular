import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ControlContainer, FormControlName } from '@angular/forms';
import { IdatosCont } from '../datosCont';

@Component({
  selector: 'app-area-texto',
  templateUrl: './area-texto.component.html',
  styleUrls: ['./area-texto.component.css']
})
export class AreaTextoComponent implements OnInit {
  @Input() _datosc: IdatosCont;
  @Input() _fCN: FormControlName
  dc_:IdatosCont;
  nombre_:string
  titulo_:string
  caract_:string
  fCN_: FormControlName
  req_:boolean
  grupo_:FormGroup
  rgx_:string
  constructor(private controlContainer: ControlContainer) { } 
  ngOnInit(): void {
    this.dc_ = this._datosc
    this.nombre_ = this.dc_.nombre
    this.titulo_ = this.dc_.titulo
    this.caract_ = this.dc_.caract
    this.fCN_ = this._fCN
    this.req_ = this.dc_.req
    this.grupo_ = this.dc_.fg
    this.rgx_ = this.dc_.regxDesc
    this.grupo_ = <FormGroup>this.controlContainer.control;
  }

}
