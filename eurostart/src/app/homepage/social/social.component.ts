import { Component, OnInit } from '@angular/core';
import { RedsocialService } from '../../redsocial.service';
import { Redsocial } from '../../redsocial';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent implements OnInit {

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

  add(form) {
    this.service.postData(form.form.value).subscribe(() => {
      location.reload()
    })
  }


  ngOnInit() {
    this.loadData();
  }
}
