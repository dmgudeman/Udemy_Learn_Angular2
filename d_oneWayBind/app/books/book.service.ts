/**
 * Created by davidgudeman on 1/5/17.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IBook } from './book';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';



@Injectable()
export class BookService {

    constructor(private _http:Http) {}

    getBooks(): Observable<IBook[]> {
        return this._http
            .get('api/books/books.jsons')
            .map((response:Response) => <IBook[]>response.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    private handleError(error:Response) {
        console.error(error);
        let message = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(message);
    }

}