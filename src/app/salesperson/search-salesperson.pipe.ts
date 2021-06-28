import { Pipe, PipeTransform } from '@angular/core';
import { Salesperson } from './salesperson.class';

@Pipe({
  name: 'searchSalesperson'
})
export class SearchSalespersonPipe implements PipeTransform {

  transform(salespeople: Salesperson[], searchCriteria: string): Salesperson[] {
    if(salespeople == null || searchCriteria.length === 0){
      return salespeople;
    }
    let search = searchCriteria.toLowerCase();
    let selectedSalespeople : Salesperson[] = [];
    for(let s of salespeople)
    {
      if(s.id.toString().includes(search)
        || s.name.toLowerCase().includes(search)
        || s.stateCode.toLowerCase().includes(search)
        || s.sales.toString().toLowerCase().includes(search)
        )
      {
        selectedSalespeople.push(s)
      }
    }
    return selectedSalespeople;
  }

}
