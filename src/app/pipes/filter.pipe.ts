import { Pipe, PipeTransform } from '@angular/core';
import ArticleDto from '../models/article';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: ArticleDto[], filterText: string): ArticleDto[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : ""
    return filterText ? value.filter((x: ArticleDto) => x.name.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }
}
