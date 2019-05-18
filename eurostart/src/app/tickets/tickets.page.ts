import {Component, OnInit} from '@angular/core';
import {TicketsService} from '../tickets.service';
import {APIService} from '../api.service';
import { sendData } from '../sendData.service'

@Component({
    selector: 'app-tickets',
    templateUrl: './tickets.page.html',
    styleUrls: ['./tickets.page.scss'],
})
export class TicketsPage implements OnInit {

    constructor(private api: APIService,private sendData: sendData) {
    }

    items: any;

    loadTickets() {
        this.api.getData().subscribe(data => {
            this.items = data;
        }, err => {
            console.log(err);
        });
    }

    ngOnInit() {
        this.loadTickets();
    }

    sendAllData() {
        this.sendData.sendData(this.items);
    }

}
