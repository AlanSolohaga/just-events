import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit{
  
  fecha: string = '';
  fechaActual: Date = new Date();
  fechaMaxima: string = '';
  disponible: boolean = false;
  firsth: boolean = false;
  fechaMax: boolean = false;

  ref = `https://wa.me/+543865571470`;
  ngOnInit(): void {
    this.getTodayDate();
    // this.getMaxDate();
  }
  // getMaxDate() {
  //   const fechaLimite = new Date();
  //   fechaLimite.setDate(this.fechaActual.getDate() + 60);
  //   this.fechaMaxima = fechaLimite.toISOString().split('T')[0];
  // }

  getTodayDate() {
    const dia = this.fechaActual.getDate();
    const mes = this.fechaActual.getMonth() + 1;
    const anio = this.fechaActual.getFullYear();
    this.fecha = `${anio}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}`
  }

  onFechaSeleccionada(evento: any) {
    this.firsth = true;
    this.fechaMax = false;
    const fechaSeleccionada = evento.target.value;
    
    if (!this.esSabado(fechaSeleccionada) && this.firsth) {
      this.disponible = true;
    }
    if (this.esSabado(fechaSeleccionada) && this.firsth) {
      this.disponible = false;
    }
    if(this.isNextToTwoMonth(fechaSeleccionada)){
      this.fechaMax = true;
    }
  }
  
  isNextToTwoMonth(fechaSeleccionada: string) {
    const fechaLimite = new Date();
    fechaLimite.setDate(this.fechaActual.getDate() + 60)
    const fecha = new Date(fechaSeleccionada);
    return fecha>fechaLimite;
  }
  

  //TODO llamado a la base para saber si está reservado o no
  esSabado(fechaSeleccionada: string): boolean {
    const diaDeLaSemana = new Date(fechaSeleccionada).getDay();
    return diaDeLaSemana === 5; // 5 representa sábado
  }
}
