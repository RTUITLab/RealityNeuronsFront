import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BackendApiService } from './backend-api.service';

const protoStatus = {
  loading: false,
  fileLoaded: false,
  lastOpeningMode: "",
  filePath: "",
};

const protoData = {
  class_name: '',
  image_ids: [],
  session_id: '',
};

@Injectable({
  providedIn: 'root'
})
export class DataModelService {

  constructor(private api: BackendApiService) { }

  public status: BehaviorSubject<any> = new BehaviorSubject<any>(protoStatus);
  public data: BehaviorSubject<any> = new BehaviorSubject<any>(protoData);

  openSession() {
    return new Promise<string>((resolve, reject) => {
      this.api.requestSession().then((session_id) => {
        let tempData = JSON.parse(JSON.stringify(protoData));
        tempData.session_id = session_id;
        this.data.next(tempData);
        console.log(this.data.value);
        resolve();
      });
    });
  }

  update() {
    this.data.next(this.data.value);
    console.log(this.data.value);
  }

  updateClass(newClass) {
    let tempData = this.data.value;
    tempData.class_name = newClass;
    this.data.next(tempData);
    console.log(this.data.value);
  }

  getLinkById(id) {
    return 'testlink'+id;
  }

  getImageIds() {
    this.api.requestImageIds(this.data.value.session_id).then((image_ids) => {
      this.data.value.image_ids = image_ids;
      this.update();
      console.log(this.data.value);
    });
  }

  async uploadImages(images) {
    for (const image of images) {
      let new_image_id = await this.api.uploadDatasetImage(this.data.value.session_id, image);
      this.data.value.image_ids.push(new_image_id);
      this.update();
    }
  }

  ImagesFromYandex(search_request, count) {
    this.api.RequestDatasetImagesFromYandex(this.data.value.session_id, search_request, count).then((image_ids) => {
      this.data.value.image_ids = this.data.value.image_ids.concat(image_ids);
      this.update();
      console.log(this.data.value);
    });
  }
}
