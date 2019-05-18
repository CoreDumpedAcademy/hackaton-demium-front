import {Component, OnInit} from '@angular/core';
import {TicketsService} from '../tickets.service';
import {APIService} from '../api.service';
import {sendData} from '../sendData.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-tickets',
    templateUrl: './tickets.page.html',
    styleUrls: ['./tickets.page.scss'],
})
export class TicketsPage implements OnInit {

    constructor(private api: APIService, private SendData: sendData, private router: Router) {
    }

    items: [{}];
    showArray = [];
    search: string;

    loadTickets() {
        this.api.getData().subscribe((data: [{}]) => {
            this.items = data;
            this.items.reverse();
            this.showArray = this.items;
        }, err => {
            console.log(err);
        });
    }

    ngOnInit() {
        this.loadTickets();
    }

    sendAllData(data) {
        this.SendData.sendData(data);
        this.router.navigateByUrl('ticket-info');
    }

    inputSearch() {
        this.showArray = [];
        if (this.search !== '') {
            const regex = new RegExp(this.search, 'i');

            this.items.forEach((item: {
                surname: string,
            }) => {
                if (item.surname.match(regex)) {
                    this.showArray.push(item);
                }
            });
        } else {
            this.showArray = this.items;
        }
    }
}
