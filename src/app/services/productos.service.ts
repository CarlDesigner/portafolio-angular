import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos : Producto[] = [];

    constructor( private http: HttpClient  ) {

            this.cargarProductos();

    }


    private cargarProductos() {

        this.http.get('https://angular-html-f24e8.firebaseio.com/productos_idx.json')
              .subscribe(  (resp: Producto[]) => {
                  this.productos = resp;
                  setTimeout(() => {
                    this.cargando = false;
                }, 200);

              });
    }

      getProducto( id: String ) {

        return this.http.get(`https://angular-html-f24e8.firebaseio.com/productos/${  id  }.json`);


      }


}
