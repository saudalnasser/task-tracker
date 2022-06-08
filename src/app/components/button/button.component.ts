import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() public color!: string;
  @Input() public text!: string;
  @Output() public btnClick: EventEmitter<any> = new EventEmitter();

  public onClick(): void {
    this.btnClick.emit();
  }
}
