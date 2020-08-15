import { Component, OnInit, Input } from '@angular/core';
import { DataModelService } from '../data-model.service';

@Component({
  selector: 'app-page-images-item',
  templateUrl: './page-images-item.component.html',
  styleUrls: ['./page-images-item.component.css']
})
export class PageImagesItemComponent implements OnInit {

  constructor(private dm: DataModelService) { }

  ngOnInit(): void {
  }

  @Input() id: string;

  link() {
    return this.dm.getLinkById(this.dm.data.value.session_id, this.id)
  }
}
