import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'print'
})
export class PrintPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [x]=args;
  
    return value*20;
  }

}
