import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from '../interfaces/product.model';

@Pipe({
  name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
  transform(value: ProductModel[], input: string): ProductModel[] {
    if (input) {
      return value.filter(
        (val) => val.title.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    } else {
      return value;
    }
  }
}
