import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    // your pipe logic here
    return value;
  }
}
