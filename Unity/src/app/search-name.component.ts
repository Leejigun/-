import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Detail } from './Detail';

@Component({
    selector: 'search-name',
    templateUrl: './search-name.component.html',
    providers:[SearchService,],
})
export class SearchNameComponent implements OnInit {
    constructor(private SearchService:SearchService) { }
    private person:Detail;
    private name:string;
    ngOnInit() { }

    getName(InputName){
        this.SearchService.getNamePerson(InputName).subscribe(res=>{
            this.person=res;
        });
        
        
    }
}