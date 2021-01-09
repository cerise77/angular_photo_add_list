import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Table} from '../data/table';
import {Observable} from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable()
export class HttpService{

    constructor(private http: HttpClient){ }

      getData() : Observable<Table[]> {
          return this.http.get('assets/table.json').pipe(
            delay(2000),
            map(data=>{
              let usersList = data["items"];
              return usersList.map(function(user:any) {
                  return {title: user.title, img: user.img};
                });
          }));
        }


}
