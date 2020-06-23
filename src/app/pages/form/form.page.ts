import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  Id: string;
  status: boolean = false;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.Id = this.route.snapshot.paramMap.get('id');
    this.status = (this.Id) ? true : false ;
  }

}
