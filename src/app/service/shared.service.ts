import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private dataSubject = new BehaviorSubject<any>(false);
  sharedData$ = this.dataSubject.asObservable();

  constructor() {}

  updateData(data: any) {
    debugger
    this.dataSubject.next(data);
  }
}
