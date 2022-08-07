import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatar'
})
export class AvatarPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let isimHarf = value.split(' ')[0].slice(0,1);
    let soyisimHarf = value.split(' ')[1].slice(0,1);
    return isimHarf+soyisimHarf;
  }

}
