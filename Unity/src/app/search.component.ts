import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Person } from './person';

@Component({
  selector: 'app-search',
  templateUrl : './search.component.html',
  providers: [SearchService],
})

export class SearchComponent implements OnInit {
  private persons:Person[];
  constructor(private SearchService:SearchService) {}

  ngOnInit(){
    this.SearchService.getCurrentPerson().subscribe(res=>{
      this.persons=res;
    });
  }
}