import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class sendData {
    private dataSource = new BehaviorSubject<Object>({});
    sentData = this.dataSource.asObservable();

    sendData(data: Object) {
        this.dataSource.next(data);
    }
}

