import { DataService } from './../data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  inputStr = '';
  highlightTitle = false;
  fontSize = 20;

  // @Output()
  // searchText = new EventEmitter();

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  btnClick(event: string) {
    this.highlightTitle = !this.highlightTitle;
    this.fontSize++;
    // this.searchText.emit(this.inputStr);
    this.dataService.search(this.inputStr);
  }
}
