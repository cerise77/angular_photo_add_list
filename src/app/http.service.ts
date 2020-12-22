import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Table} from './table';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService{

    constructor(private http: HttpClient){ }

    getData() : Observable<Table[]> {
        return this.http.get('table.json').pipe(map(data=>{
            let usersList = data["items"];
            return usersList.map(function(user:any) {
                return {title: user.title, img: user.img};
              });
        }));
      }

}
