/**
 * Created by HudaZulifqar on 8/18/2017.
 */
/* tslint:disable */
import {
  AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy,
  Output
} from "@angular/core";
import {DomHandlerService} from "./domhandler";

@Component({
  selector: 'photo-gallery',
  templateUrl: 'gallery.html',
  styleUrls: ['gallery.scss'],
})
export class GalleryComponent implements AfterViewChecked,AfterViewInit,OnDestroy {

  @Input() style: any;

  @Input() styleClass: string;

  @Input() panelWidth: number = 600;

  @Input() panelHeight: number = 400;

  @Input() frameWidth: number = 60;

  @Input() frameHeight: number = 40;

  @Input() activeIndex: number = 0;

  @Input() showFilmstrip: boolean = true;

  @Input() autoPlay: boolean = true;

  @Input() transitionInterval: number = 4000;

  @Input() showCaption: boolean = true;

  @Output() onImageClicked = new EventEmitter();

  _images: any[];

  slideshowActive: boolean;

  public container: any;

  public panelWrapper: any;

  public panels: any;

  public caption: any;

  public stripWrapper: any;

  public strip: any;

  public frames: any;

  public interval: any;

  public stripLeft: number = 0;

  public imagesChanged: boolean;

  public initialized: boolean;

  constructor(public el: ElementRef, public domHandler: DomHandlerService) {}

  ngAfterViewChecked() {
    if(this.imagesChanged) {
      this.stopSlideshow();
      this.render();
      this.imagesChanged = false;
    }
  }

  @Input() get images(): any[] {
    return this._images;
  }

  set images(value:any[]) {
    this._images = value;
    this.activeIndex = 0;
    this.imagesChanged = true;
  }

  ngAfterViewInit() {
    this.container = this.el.nativeElement.children[0];
    this.panelWrapper = this.domHandler.findSingle(this.el.nativeElement, 'ul.ui-galleria-panel-wrapper');
    this.initialized = true;

    if(this.showFilmstrip) {
      this.stripWrapper = this.domHandler.findSingle(this.container,'div.ui-galleria-filmstrip-wrapper');
      this.strip = this.domHandler.findSingle(this.stripWrapper,'ul.ui-galleria-filmstrip');
    }

    if(this.images && this.images.length) {
      this.render();
    }
  }

  render() {
    this.panels = this.domHandler.find(this.panelWrapper, 'li.ui-galleria-panel');

    if(this.showFilmstrip) {
      this.frames = this.domHandler.find(this.strip,'li.ui-galleria-frame');
      this.stripWrapper.style.width = this.domHandler.width(this.panelWrapper) - 50 + 'px';
      this.stripWrapper.style.height = this.frameHeight + 'px';
    }

    if(this.showCaption) {
      this.caption = this.domHandler.findSingle(this.container,'div.ui-galleria-caption');
      this.caption.style.bottom = this.showFilmstrip ? this.domHandler.getOuterHeight(this.stripWrapper,true) + 'px' : 0 + 'px';
      this.caption.style.width = this.domHandler.width(this.panelWrapper) + 'px';
    }

    if(this.autoPlay) {
      this.startSlideshow();
    }

    this.container.style.visibility = 'visible';
  }

  startSlideshow() {
    this.interval = setInterval(() => {
      this.next();
    }, this.transitionInterval);

    this.slideshowActive = true;
  }

  stopSlideshow() {
    if(this.interval) {
      clearInterval(this.interval);
    }

    this.slideshowActive = false;
  }

  clickNavRight() {
    if(this.slideshowActive) {
      this.stopSlideshow();
    }
    this.next();
  }

  clickNavLeft() {
    if(this.slideshowActive) {
      this.stopSlideshow();
    }
    this.prev();
  }

  frameClick(frame) {
    if(this.slideshowActive) {
      this.stopSlideshow();
    }

    this.select(this.domHandler.index(frame), false);
  }

  prev() {
    console.log("prv img clicked");
    if(this.activeIndex !== 0) {
      this.select(this.activeIndex - 1, true);
    }
  }

  next() {
    if(this.activeIndex !== (this.panels.length-1)) {
      this.select(this.activeIndex + 1, true);
    }
    else {
      this.select(0, false);
      this.stripLeft = 0;
    }
  }

  select(index, reposition) {
    if(index !== this.activeIndex) {
      let oldPanel = this.panels[this.activeIndex],
        newPanel = this.panels[index];

      this.domHandler.fadeIn(newPanel, 500);

      if(this.showFilmstrip) {
        let oldFrame = this.frames[this.activeIndex],
          newFrame = this.frames[index];

        if(reposition === undefined || reposition === true) {
          let frameLeft = newFrame.offsetLeft,
            stepFactor = this.frameWidth + parseInt(getComputedStyle(newFrame)['margin-right'], 10),
            stripLeft = this.strip.offsetLeft,
            frameViewportLeft = frameLeft + stripLeft,
            frameViewportRight = frameViewportLeft + this.frameWidth;

          if(frameViewportRight > this.domHandler.width(this.stripWrapper))
            this.stripLeft -= stepFactor;
          else if(frameViewportLeft < 0)
            this.stripLeft += stepFactor;
        }
      }

      this.activeIndex = index;
    }
  }

  clickImage(event, image, i) {
    console.log("image clicked :: ", image,i)
    this.onImageClicked.emit({originalEvent: event, image: image, index: i})
  }

  ngOnDestroy() {
    this.stopSlideshow();
  }

}

