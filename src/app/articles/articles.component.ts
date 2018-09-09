import { DataService } from './../data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  @Input()
  itemList: any;

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
  }

}
