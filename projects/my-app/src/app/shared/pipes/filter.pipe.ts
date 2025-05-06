import { Pipe, PipeTransform, Injectable } from "@angular/core";

@Pipe({
  name: 'filter',
  pure: false
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item =>
      Object.values(item).some((value:any) =>
        value.toString().toLowerCase().includes(searchText)
      )
    );
  }
}
