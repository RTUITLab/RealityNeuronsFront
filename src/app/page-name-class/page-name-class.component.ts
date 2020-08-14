import { Component, OnInit, Input } from '@angular/core';
import { DataModelService } from '../data-model.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-name-class',
  templateUrl: './page-name-class.component.html',
  styleUrls: ['./page-name-class.component.css']
})
export class PageNameClassComponent implements OnInit {

  constructor(private dm: DataModelService, private router: Router) { }

  ngOnInit(): void {
  }

  className: string;

  proceed() {
    this.dm.updateClass(this.className);
    this.router.navigateByUrl('/images');
  }

}
