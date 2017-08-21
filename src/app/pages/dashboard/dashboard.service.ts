/**
 * Created by HudaZulifqar on 6/26/2017.
 */
import {Injectable} from "@angular/core";
import {Http} from '@angular/http';

import {PagesConstants} from '../pages.constants.service'

@Injectable()
export class DashboardService {
  images: any[];
  images_odd: any[];

  private url = 'team/position/?seasonName=2017+20+Overs+League&seasonYear=Group+A';  // URL to web api
  constructor(private http: Http, private  pagesConstant: PagesConstants) {
  }

  header = this.pagesConstant.pagesContants.url.header;
  teamUrl = this.pagesConstant.pagesContants.url.baseUrl + this.url;
  private groupsUrls = this.pagesConstant.pagesContants.url.baseUrl + '/season/groups/?year=';

  getSeasonGroups(year: String): Promise<any[]> {
    console.info('Making request to server for teams standing');
    return this.http.get(this.groupsUrls + year, this.header).toPromise().then(res => res.json()).catch(this.handleError);
  }

  getTeamStanding(): Promise<any[]> {
    console.info('Making request to server for teams standing');
    return this.http.get(this.teamUrl, this.header).toPromise().then(res => res.json())
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('Error while date from servier', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getPhoto() {
    this.images = [];
    this.images.push({
      source: ' ../../../../assets/images/Galleria/galleria2.jpg',
      alt: 'Description for Image 2',
      title: 'Title 2'
    });

    this.images.push({
      source: ' ../../../../assets/images/Galleria/galleria4.jpg',
      alt: 'Description for Image 4',
      title: 'Title 4'
    });

    this.images.push({
      source: ' ../../../../assets/images/Galleria/galleria6.jpg',
      alt: 'Description for Image 6',
      title: 'Title 6'
    });

    this.images.push({
      source: ' ../../../../assets/images/Galleria/galleria8.jpg',
      alt: 'Description for Image 8',
      title: 'Title 8'
    });

    this.images.push({
      source: ' ../../../../assets/images/Galleria/galleria10.jpg',
      alt: 'Description for Image 10',
      title: 'Title 10'
    });

    this.images.push({
      source: ' ../../../../assets/images/Galleria/galleria12.jpg',
      alt: 'Description for Image 12',
      title: 'Title 12'
    });

    this.images.push({
      source: ' ../../../../assets/images/Galleria/galleria14.png',
      alt: 'Description for Image 12',
      title: 'Title 14'
    });

    this.images.push({
      source: ' ../../../../assets/images/Galleria/galleria16.jpg',
      alt: 'Description for Image 12',
      title: 'Title 16'
    });

    return this.images;
  }

  getPhoto_odd() {
    this.images_odd = [];
    this.images_odd.push({
      source: ' ../../../../assets/images/Galleria/galleria1.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1'
    });

    this.images_odd.push({
      source: ' ../../../../assets/images/Galleria/galleria3.jpg',
      alt: 'Description for Image 3',
      title: 'Title 3'
    });

    this.images_odd.push({
      source: ' ../../../../assets/images/Galleria/galleria5.jpg',
      alt: 'Description for Image 5',
      title: 'Title 5'
    });

    this.images_odd.push({
      source: ' ../../../../assets/images/Galleria/galleria7.jpg',
      alt: 'Description for Image 7',
      title: 'Title 7'
    });

    this.images_odd.push({
      source: ' ../../../../assets/images/Galleria/galleria9.jpg',
      alt: 'Description for Image 9',
      title: 'Title 9'
    });

    this.images_odd.push({
      source: ' ../../../../assets/images/Galleria/galleria11.jpg',
      alt: 'Description for Image 11',
      title: 'Title 11'
    });

    this.images_odd.push({
      source: ' ../../../../assets/images/Galleria/galleria13.jpg',
      alt: 'Description for Image 12',
      title: 'Title 13'
    });

    this.images_odd.push({
      source: ' ../../../../assets/images/Galleria/galleria15.png',
      alt: 'Description for Image 12',
      title: 'Title 15'
    });

    this.images_odd.push({
      source: ' ../../../../assets/images/Galleria/galleria17.jpg',
      alt: 'Description for Image 12',
      title: 'Title 17'
    });
    this.images_odd.push({
      source: ' ../../../../assets/images/Galleria/galleria18.jpg',
      alt: 'Description for Image 18',
      title: 'Title 17'
    });
    return this.images_odd;
  }

}
