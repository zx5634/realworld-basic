import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'conduit';
  subtitle = 'A place to share your <u>knowledge</u>.';
  list$: Observable<any[]>;

  constructor(public dataService: DataService) {
    // this.list = this.dataService.list;
  }

  get keyword() {
    return this.dataService.keyword;
  }

  ngOnInit(): void {
    // this.dataService.loadData();
    this.list$ = this.dataService.getArticles();
  }
}
