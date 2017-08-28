/**
 * Created by HudaZulifqar on 8/24/2017.
 */
import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'submit-button',
  templateUrl: 'submit.button.html',
})
export class submitButtonComponent implements OnChanges{
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();
  @Input() isSubmitted: boolean;
  @Input() title: string;
  @Input() isValid: boolean;

  ngOnChanges(changes: SimpleChanges) {
    console.log('onChange fired: changes =>', changes);
  }
  onClick(){
    this.notify.emit('clicked');
  }
}
