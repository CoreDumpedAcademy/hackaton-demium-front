import { Component, OnInit } from '@angular/core';
import { RedsocialService } from '../redsocial.service';
import { Redsocial } from '../redsocial';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.page.html',
  styleUrls: ['./contactanos.page.scss'],
})
export class ContactanosPage implements OnInit {

  constructor(private service: RedsocialService, private router: Router) { }

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

  goBack() {
    this.router.navigateByUrl('')
  }

  ngOnInit() {
    this.loadData();
  }

}
