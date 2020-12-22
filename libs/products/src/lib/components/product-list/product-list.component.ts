import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '@nx-workspace/data-models';

@Component({
  selector: 'nx-workspace-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] | null = [];
  @Output() filter = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onFilter(category: string) {
    this.filter.emit(category);
  }
}
