import {Component, OnInit} from '@angular/core';
import {TicketsService} from '../tickets.service';
import {APIService} from '../api.service';
import { sendData } from '../sendData.service'
import { Router } from '@angular/router';

@Component({
    selector: 'app-tickets',
    templateUrl: './tickets.page.html',
    styleUrls: ['./tickets.page.scss'],
})
export class TicketsPage implements OnInit {

    constructor(private api: APIService,private SendData: sendData, private router: Router) {
    }

    items: [{}];

    loadTickets() {
        this.api.getData().subscribe((data: [{}]) => {
            this.items = data;
            this.items.reverse();
        }, err => {
            console.log(err);
        });
    }

    ngOnInit() {
        this.loadTickets();
    }

    sendAllData(lastName) {
        this.SendData.sendData(lastName);
        this.router.navigateByUrl('ticket-info');
    }

}
