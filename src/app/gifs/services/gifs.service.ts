import {
  query
} from '@angular/animations';
import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http: HttpClient) {}

  private _historial: string[] = [];

  private apikey: string = 'e55V74FYc65n4dHVd4BrcXwbBEmIOhJS'

  private url: string = `http://api.giphy.com/v1/gifs/search?api_key=${this.apikey}&q=`;

  public resultados: string[] = [];

  get historial() {
    return [...this._historial];
  }

  insertHistorial(query: string) {

    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      this.getGifs(query);
      this.insertLocalStorage();
    }

  }
  getGifs(query: string) {
    this.http.get(`${this.url}${query}&limit=15`)
      .subscribe((resp: any) => {
        this.resultados = resp.data;
      })
  }
  insertLocalStorage() {
    localStorage.setItem('gifs', JSON.stringify(this._historial));
  }
  getLocalStorage() {
    if (localStorage.getItem('gifs') === null) {
      this._historial = [];
    }
    else{
      this._historial = JSON.parse(localStorage.getItem('gifs')); 
    }
    
  }
}
