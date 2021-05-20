import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  GifsService
} from '../services/gifs.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  constructor(private gifsService: GifsService) {}

  ngOnInit(): void {}

  @ViewChild('textBuscar') textBuscar: ElementRef < HTMLInputElement > ;

  buscar() {

    let valor = this.textBuscar.nativeElement.value;
    if (valor === '') {
      return;

    } else {
      this.gifsService.insertHistorial(valor);
      this.textBuscar.nativeElement.value = '';
    }
  }

}
