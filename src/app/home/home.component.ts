import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { regex } from '../regex';
import { IdatosCont } from '../datosCont';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  grupo: FormGroup;
  //nombre:string
  regx:regex = new regex()
  nombre:IdatosCont
  apellido:IdatosCont
  descrip:IdatosCont
  fechaNac:IdatosCont
  myDate:string
  skill:IdatosCont
  exp:IdatosCont
  //skillsForm:FormGroup

  constructor(private fb: FormBuilder) {
    
   }
  
  ngOnInit(): void {   

    this.grupo = this.fb.group({
      nombre: ['Fernando', [Validators.required, Validators.maxLength(50),Validators.pattern(this.regx.getRegex('LET').regex_)]],
      apellido: ['Jimenez', [Validators.required, Validators.maxLength(50),Validators.pattern(this.regx.getRegex('LET').regex_)]],
      descrip: ['Ing. Sistemas Computacionales', [Validators.maxLength(200),Validators.pattern(this.regx.getRegex('ANY').regex_)]],
      fechaNac: ['', [Validators.required]],
      skills: this.fb.array([]),
    });
    // this.skillsForm = this.fb2.group({
      
    // })
    this.cargarControles()
    
  }

  

  get skills() : FormArray {
    return this.grupo.get("skills") as FormArray
  }

  cargarControles(){
    this.nombre = {
      nombre:'nombre', 
      titulo:'Nombre', 
      caract:'50', 
      req:true, 
      fg:this.grupo, 
      regxDesc : this.regx.getRegex('LET')._desc
      };

      this.apellido = {
        nombre:'apellido', 
        titulo:'Apellido', 
        caract:'50', 
        req:true, 
        fg:this.grupo, 
        regxDesc : this.regx.getRegex('LET')._desc
        };
        this.descrip = {
          nombre:'descrip', 
          titulo:'Descripción', 
          caract:'200', 
          req:false, 
          fg:this.grupo, 
          regxDesc : this.regx.getRegex('ANY')._desc
          };
          this.fechaNac = {
            nombre:'fechaNac', 
            titulo:'Fecha de Nacimiento', 
            caract:'', 
            req:true, 
            fg:this.grupo, 
            regxDesc : ''
            };
            
            
            
  }

  removeSkill(i:number) {
    this.skills.removeAt(i);
  }

  newSkill(): FormGroup{
    
    return this.fb.group({
      skill: ['', [Validators.maxLength(40),Validators.pattern(this.regx.getRegex('LET').regex_)]],
      exp: ['', [Validators.maxLength(2),Validators.pattern(this.regx.getRegex('NUM').regex_)]],
      
    },()=>{
      
      this.skill = {
        nombre:'skill', 
        titulo:'Habilidades', 
        caract:'40', 
        req:true, 
        fg:this.grupo, 
        regxDesc : this.regx.getRegex('LET')._desc
        };
        console.log(this.grupo)
        this.exp = {
          nombre:'exp', 
          titulo:'Experiencia', 
          caract:'2', 
          req:true, 
          fg:this.grupo, 
          regxDesc : this.regx.getRegex('NUM')._desc
          };
          console.log(this.grupo)
    })
    
        //console.log(this.grupo)
        
  }

  save(){
    console.log(this.grupo.value['nombre'])
  }
  addSkills() {
    
    this.skills.push(this.newSkill());
    //this.skills.push(this.skills.controls['skill']);
    //this.skills.push(this.skills.controls[0]);
    //this.skills.push(this.fb2.array['exp']);
  }
}
