import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BackendApiService } from './backend-api.service';
import { Router } from '@angular/router';

const protoStatus = {
  loading: false,
  fileLoaded: false,
  lastOpeningMode: "",
  filePath: "",
};

const protoData = {
  status: 'idle',
  class_name: '',
  image_ids: [],
  session_id: '',
  test_result: {
    image_id: '',
    model_solution: ''
  }
};

@Injectable({
  providedIn: 'root'
})
export class DataModelService {

  constructor(private api: BackendApiService, private router: Router) { }

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

  getLinkById(session_id, id) {
    // return 'https://www.justmortgagebrokers.co.uk/content/uploads/2017/10/cat.png';
    return 'https://res.cloudinary.com/nekolya75/image/upload/v1597424731/RealityNeurons/' + session_id + '/' + id;
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
    this.data.value.status = 'RequestDatasetImagesFromYandex';
    this.update();
    this.api.RequestDatasetImagesFromYandex(this.data.value.session_id, search_request, count).then((image_ids) => {
      this.data.value.image_ids = this.data.value.image_ids.concat(image_ids);
      this.data.value.status = 'idle';
      this.update();
      console.log(this.data.value);
    });
  }

  removeImage(image_id) {
    this.data.value.image_ids.splice(this.data.value.image_ids.indexOf(image_id), 1);
    this.update();
    this.api.removeImage(this.data.value.session_id, image_id).then(() => {
      this.getImageIds();
    });
  }

  startTraining() {
    this.router.navigateByUrl('/training');
    this.api.startTraining(this.data.value.session_id, this.data.value.class_name).then(() => {
      this.router.navigateByUrl('/testing');
    });
  }

  TestImagesFromYandex(search_request) {
    this.data.value.status = 'RequestTestImageFromYandex';
    this.update();
    this.api.RequestTestImageFromYandex(this.data.value.session_id, search_request).then((test_result) => {
      this.data.value.test_result = test_result;
      this.data.value.status = 'idle';
      this.update();
      console.log(this.data.value);
    });
  }
}
