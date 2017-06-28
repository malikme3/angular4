/**
 * Created by HudaZulifqar on 6/26/2017.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class PagesConstants {
  private headers = new Headers({
    'Access-Control-Allow-Origin': '*.*',
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  private url = 'http://localhost:8080/ZulfiCricket/';  // URL to middle tier Java (Spring MVC)

  pagesContants = {
    url: {
      header: this.headers,
      baseUrl: this.url
    }
  }
}
