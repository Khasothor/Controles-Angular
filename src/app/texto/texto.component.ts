import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ControlContainer, FormControlName } from '@angular/forms';
import { IdatosCont } from '../datosCont';


@Component({
  selector: 'app-texto',
 templateUrl: 'texto.component.html'
})
export class TextoComponent implements OnInit {
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
    //console.log(this._datosc.fg.value)
    //console.log(this._datosc.nombre)
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
  
  //public get mensaje_error(){
    // if (this.fCN_.errors.maxLenght && this.fCN_.touched) {
    //   console.log('maxlength')
    //   return 'Debe de tener un valor máximo de ' + this.caract_ + ' caracteres'
    // }
    // if (this.fCN_.invalid && this.fCN_.touched) {
    //   console.log('regex')
    //   return this.rgx_
    // }
    
  //}
  
}
