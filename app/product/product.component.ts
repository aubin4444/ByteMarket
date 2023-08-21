import { Component, Input } from '@angular/core';
import { Product } from '../class/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product! : Product
  mouseHover = false

  constructor(private routeur : Router){}

  readMore(){
    this.routeur.navigate(['/', 'products', this.product.id])
  }
}
