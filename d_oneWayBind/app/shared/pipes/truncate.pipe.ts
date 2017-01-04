/**
 * Created by davidgudeman on 1/4/17.
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'limitChar'
})

export class TruncatePipe implements PipeTransform {
    transform(input:string, limit:number){
        if(input)
        return (input.length >length)? input.substr(0,limit) + '...' : input;
    }
}