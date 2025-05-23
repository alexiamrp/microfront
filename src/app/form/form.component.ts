import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {

  cliente: any ={
    "nombre": "Jerry Mattedi",
    "date": "19 Mayo, 2021: 10:10 AM",
    "folioSAC": "251-661-5362",
    "folioMV": "12345678",
    "registrado": "Sí"
  }

  respuestasForm: FormGroup;
  expediente: FormControl;
  digitalizacion: FormControl;
  datos: FormControl;
  vigencia: FormControl;
  identificacion: FormControl;
  respuesta: FormControl;
  motivo: FormControl;
  observaciones: FormControl;

  constructor(private _MatDialog: MatDialog,private http: HttpClient){
    this.expediente = new FormControl('');
    this.digitalizacion = new FormControl('');
    this.datos = new FormControl('');
    this.vigencia = new FormControl('');
    this.identificacion = new FormControl('');
    this.respuesta = new FormControl('');
    this.motivo = new FormControl('');
    this.observaciones = new FormControl('');

    this.respuestasForm = new FormGroup({
      expediente: this.expediente,
      digitalizacion:this.digitalizacion,
      datos: this.datos,
      vigencia: this.vigencia,
      identificacion: this.identificacion,
      respuesta: this.respuesta,
      motivo: this.motivo,
      observaciones: this.observaciones
    })
  }

  abrirModal():void{
    //console.log(this.respuestasForm.value)
    this._MatDialog.open(ModalComponent,{
      data:{r: this.respuestasForm.value}
    });
  }
}
