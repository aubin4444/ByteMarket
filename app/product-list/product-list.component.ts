import { Component } from '@angular/core';
import { Product } from '../class/product';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  ProductArray$! : Observable<Product[]>

  constructor(private service : ProductService){

  }

  ngOnInit(): void {
      this.ProductArray$ = this.service.getProduct()
  }
}
