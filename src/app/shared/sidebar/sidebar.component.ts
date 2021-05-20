import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

get historial():string[]{

  return this.gifsService.historial;
  
}
getHistorial(i){
  console.log(this.historial[i]);
  this.gifsService.getGifs(this.historial[i])
}
}
