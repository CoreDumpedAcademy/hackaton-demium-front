import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RedsocialService} from '../redsocial.service'
import {Redsocial} from '../redsocial'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(private router:Router, private service: RedsocialService) { }


  redes:[Redsocial]
  hasLoaded:Boolean = false

  loadData() {
    this.service.getData().subscribe((data:{
      socials:[Redsocial]
    }) => {
      this.redes = data.socials
      this.hasLoaded = true
    })
  }
  goHotel(){
    this.router.navigateByUrl('hotelsearch');
  }
  goTrain(){
    this.router.navigateByUrl('searchbar');
  }
  ngOnInit() {
    this.loadData();
  }

}
