import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Person } from './person';

@Component({
    selector: 'search-party',
    templateUrl: './search-party.component.html',
    providers:[SearchService,],
})
export class SearchPartyComponent implements OnInit {
    constructor(private SearchService:SearchService) { }
    private person:Person[];
    private name:string;
    ngOnInit() { }

    getParty(InputName){
        this.SearchService.getParty(InputName).subscribe(res=>{
            this.person=res;
        });
        
        
    }
}