import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor() { }


  async requestSession() {
    // сюда приходит 0 параметров
    return new Promise<string>((resolve, reject) => {
      resolve('test_session'); // этот код должен возвращать сессию
    });
  }

  async requestImageIds(session_id) {
    // сюда приходит 1 параметр - id сессии
    return new Promise<string[]>((resolve, reject) => {
      resolve(['1_test_id', '1_test_id']); // этот код должен возвращать список id картинок, либо список ссылок на картинки
    });
  }

  async uploadDatasetImage(session_id, image) {
    // сюда приходит 2 параметра - id сессии и картинка, сериализованную как base64 (string)
    return new Promise<string>((resolve, reject) => {
      resolve('LoadFromPC_test_id'); // этот код должен возвращать id картинки, либо ссылку на картинку
    });
  }

  async RequestDatasetImagesFromYandex(session_id, search_request, count) {
    // сюда приходит 3 параметра - id сессии, целевой запрос для поиска и количество изображений для парсинга.
    return new Promise<string[]>((resolve, reject) => {
      let s: string[] = [];
      for (let i = 0; i < count; i++) {
        s.push('LoadFromYandex_req_' + search_request + '_test_id_' + (i+1).toString());
      }
      resolve(s); // этот код должен возвращать список id картинок, либо список ссылок на картинки
    });
  }

}
