import { Component, OnInit, Input } from '@angular/core';
import { IdatosCont } from '../datosCont';
import { FormControlName, FormGroup, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})

export class CalendarioComponent implements OnInit {
  @Input() _datosc: IdatosCont;
  //@Input() grupo: FormGroup;
  //@Input() _nombre:string;
  // @Input() _titulo:string;
  // @Input() _caract:string;
  @Input() _fCN: FormControlName
  // @Input() _req:boolean
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
    //console.table(this._datosc.fg.get('nombre'))
    this.dc_ = this._datosc
    //this.fCN_ = this._datosc.fg.value[this.nombre_]
    //console.table(this.dc_.fg.get('nombre'))
    this.nombre_ = this.dc_.nombre
    this.titulo_ = this.dc_.titulo
    this.caract_ = this.dc_.caract
    this.fCN_ = this._fCN
    this.req_ = this.dc_.req
    this.grupo_ = this.dc_.fg
    this.rgx_ = this.dc_.regxDesc
    //console.log(this.rgx_)
    //this.grupo = new FormGroup({})
    this.grupo_ = <FormGroup>this.controlContainer.control;
  }

}
