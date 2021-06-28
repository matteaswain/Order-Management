import { analyzeAndValidateNgModules } from '@angular/compiler';
import { summaryForJitFileName } from '@angular/compiler/src/aot/util';
import { Pipe, PipeTransform } from '@angular/core';
import { ɵInternalFormsSharedModule } from '@angular/forms';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any[], column: string = "id", isAsc: boolean = true): any[] {

    let sortFn= (a : any, b : any): number => 
    {
      let x = (typeof a[column] === "number") ? a[column] : a[column].toString().toLowerCase();
      let y = (typeof b[column] === "number") ? b[column] : b[column].toString().toLowerCase();
      let sortResult = 0;
      // for ASC sequence
      if(x === y)
      { sortResult = 0;
      }
      if(x < y){
        sortResult = 1;
      }
      else{
        sortResult = -1;
      }   
    // for Desc sequence
    if( isAsc === false){
      sortResult *= -1;
    } 
    return sortResult;
    };

    return items.sort(sortFn);
  }

}
