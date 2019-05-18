import { Component, OnInit } from '@angular/core';
import { RedsocialService } from '../redsocial.service';
import { Redsocial } from '../redsocial';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.page.html',
  styleUrls: ['./contactanos.page.scss'],
})
export class ContactanosPage implements OnInit {

  constructor(private service: RedsocialService) { }

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

  ngOnInit() {
    this.loadData();
  }

}
