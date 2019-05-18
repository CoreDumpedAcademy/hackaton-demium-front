import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class sendData {
    private dataSource = new BehaviorSubject<string>('');
    sentData = this.dataSource.asObservable();

    sendData(data) {
        this.dataSource.next(data);
    }
}

