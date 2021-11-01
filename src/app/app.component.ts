import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as action from './contador.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  count$: Observable<number>= new Observable<number>();

  constructor (private store:Store<{count:number}>){

  }

  ngOnInit(){
   this.count$ =  this.store.pipe(select('count')); 
  }

  incrementar(){
    this.store.dispatch(action.inc());
  }

  decrementar(){
    this.store.dispatch(action.dec());
  }

  random(){
    this.store.dispatch(action.random());
  }

  saltar(num:number){
    this.store.dispatch(action.saltar({num:num}));
  }
}
