import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  urlImageStorage: string[] = [];

  constructor(private router: ActivatedRoute, private afStorage: AngularFireStorage, private rout: Router) { }

  link: string = "";
  index: number;
  pic: boolean;
  ngOnInit() {
    this.pic = false;
    let ind = this.router.snapshot.paramMap.get("link");
    this.link = ind;
    if (this.link != null) {
      this.pic = true;
    } else {
      this.pic = false;
    }
  }

  toTab3() {
    this.rout.navigate(['tabs/tab3']);
  }

}
