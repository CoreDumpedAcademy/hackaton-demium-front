import {Component, OnInit} from '@angular/core';
import {ApiResponse} from '../api-response-train';
import {APIService} from '../api.service';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';


@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.page.html',
    styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
    citiesList = ['Madrid',
        'Barcelona',
        'Malaga',
        'Granada',
        'Pamplona'];
    fromDate: string;
    data = {};
    toDate: string;
    numberPassengers: number = 1;
    cityFrom:string ='Madrid';
    cityTo:string =  'Barcelona';
    numberChilds:number = 0;
    bothTickets = false;
    numberNights:number = 1;
    name:string="";
    lastName:string ="";
    errorText:string ="";

    constructor(private apiService: APIService, private storage: Storage, private router: Router) {
    }
    addNight(){
        this.numberNights++;
      }
      subNight(){
        if(this.numberNights > 1) this.numberNights--;
      }

    addPassenger() {
        this.numberPassengers++;
    }

    subPassenger() {
        if (this.numberPassengers > 0) {
            this.numberPassengers = this.numberPassengers - 1;
        }

    }

    addChild() {
        this.numberChilds++;
    }

    subChild() {
        if (this.numberChilds > 0) {
            this.numberChilds--;
        }
    }

    async sendData() {
        if (this.cityFrom !== this.cityTo && this.name != "" && this.lastName != "") {
            const dataUrl = this.cityFrom + '/' + this.cityTo + '/' + this.numberPassengers + '/' + this.numberChilds;
            console.log(dataUrl.toLowerCase());
            await this.apiService.sendDataTrain(dataUrl)
            await this.apiService.sendTicketTrain(this.name, this.lastName, this.numberPassengers, this.numberChilds,this.cityFrom, this.cityTo);
        if(this.bothTickets){
            const hotelTicket = this.cityTo +"/" + this.numberPassengers + "/" + this.numberChilds + "/" + this.numberNights;
            await this.apiService.sendDataHotel(hotelTicket.toLowerCase());
            await this.apiService.sendTicketHotel(this.name, this.lastName,this.numberPassengers, this.numberChilds, this.cityTo)
            await this.storage.set("BOTH_TICKET", true);
        }
            this.router.navigateByUrl('lista-trenes')
        }else if(this.name == ""){
            this.errorText = "The name can't be in blank."
        }else if(this.lastName == ""){
            this.errorText = "The last name can't be in blank."
        }else{
            this.errorText = "You cant take a train from "+ this.cityFrom + " to " +  this.cityTo + ", is the same place... "

        }
    }
    goHome(){
        this.router.navigateByUrl('');
    }
    async ngOnInit() {
        await this.storage.set("BOTH_TICKET", false)
        this.fromDate = new Date().toISOString();
    }
}
