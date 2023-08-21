import { Component, OnInit } from '@angular/core';
import { Product } from '../class/product';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-full',
  templateUrl: './product-full.component.html',
  styleUrls: ['./product-full.component.css']
})
export class ProductFullComponent implements OnInit{
  product$! : Observable<Product>
  productIndex! : number

  constructor(private service : ProductService, private activatedRoute : ActivatedRoute){
    this.productIndex = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '0') 
    this.product$ = this.service.getProductByIndex(this.productIndex)
  }

  ngOnInit(): void {
  }
}
