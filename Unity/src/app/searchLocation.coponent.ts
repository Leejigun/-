import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Person } from './person';

@Component({
    selector: 'search-Location',
    templateUrl: './SearchLocation.component.html',
    providers:[SearchService,],
})
export class SearchLocationComponent implements OnInit {
    constructor(private SearchService:SearchService) { }
    private person:Person[];
    private name:string;
    ngOnInit() { }

    getLocation(InputName){
        this.SearchService.getLocation(InputName).subscribe(res=>{
            this.person=res;
        });
        
        
    }
}