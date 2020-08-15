import { Component, OnInit } from '@angular/core';
import { DataModelService } from '../data-model.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-start',
  templateUrl: './page-start.component.html',
  styleUrls: ['./page-start.component.css']
})
export class PageStartComponent implements OnInit {

  constructor(private dm: DataModelService, private router: Router) { }

  ngOnInit(): void {
  }

  proceed() {
    this.dm.openSession().then(() => {
      this.router.navigateByUrl('/name-class');
    });
  }
}
