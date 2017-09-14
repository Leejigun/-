import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import 'rxjs/Rx';
import { Person } from './person';
import { Detail } from './Detail';

@Injectable()
export class SearchService {

  constructor(private http:Http) { }

  URL='http://apis.data.go.kr/9710000/NationalAssemblyInfoService/getMemberCurrStateList?ServiceKey=';
  key='oMTIwPLNH%2F5cwhdorxcnemlDaA%2Ba2lZA3Hfr9addxI0NdqMAw%2Bg3E5kPAH%2BCiE%2FX3o3bYfPLEerVhb7OJ1mtMQ%3D%3D&_type=json';
  
  getCurrentPerson():Observable<Person[]>{
      return this.http.get(this.URL+this.key)
          .map(res=>res.json().response.body.items.item);
  }

  getNamePerson(Inputname:string):Observable<Detail>{
    var nameURL="http://apis.data.go.kr/9710000/NationalAssemblyInfoService/getMemberNameInfoList?hgnm=";
    var Key="&ServiceKey=oMTIwPLNH%2F5cwhdorxcnemlDaA%2Ba2lZA3Hfr9addxI0NdqMAw%2Bg3E5kPAH%2BCiE%2FX3o3bYfPLEerVhb7OJ1mtMQ%3D%3D&_type=json";
    var UrlName=encodeURI(Inputname);
    return this.http.get(nameURL+UrlName+Key)
          .map(res=>res.json().response.body.items.item);
  }

  getParty(Inputname:string):Observable<Person[]>{
    var nameURL="http://apis.data.go.kr/9710000/NationalAssemblyInfoService/getMemberNameInfoList?hgnm=";
    var Key="&ServiceKey=oMTIwPLNH%2F5cwhdorxcnemlDaA%2Ba2lZA3Hfr9addxI0NdqMAw%2Bg3E5kPAH%2BCiE%2FX3o3bYfPLEerVhb7OJ1mtMQ%3D%3D&_type=json";
    var UrlName=encodeURI(Inputname);
    return this.http.get(nameURL+UrlName+Key)
          .map(res=>res.json().response.body.items.item);
  }
  getLocation(Inputname:string):Observable<Person[]>{
    var nameURL="http://apis.data.go.kr/9710000/NationalAssemblyInfoService/getMemberNameInfoList?hgnm=";
    var Key="&ServiceKey=oMTIwPLNH%2F5cwhdorxcnemlDaA%2Ba2lZA3Hfr9addxI0NdqMAw%2Bg3E5kPAH%2BCiE%2FX3o3bYfPLEerVhb7OJ1mtMQ%3D%3D&_type=json";
    var UrlName=encodeURI(Inputname);
    return this.http.get(nameURL+UrlName+Key)
          .map(res=>res.json().response.body.items.item);
  }
}
