import { DataService } from './data.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArticle'
})
export class FilterArticlePipe implements PipeTransform {
  constructor(private dataService: DataService) {}

  transform(articles: any[] , keyword?: any): any {
    if (keyword) {
      return articles.filter(item => item.title.indexOf(keyword) !== -1);
    } else {
      return articles;
    }
  }

}
