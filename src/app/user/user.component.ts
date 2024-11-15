import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import {User} from '../services/users.service';
import {NgClass} from '@angular/common';
import {getRandomTime} from '../utils/utils';

@Component({
  selector: 'user',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgClass
  ],
  template: `
    <div (click)="selectUser()" class="user" [ngClass]="selected ? 'selected' : '' ">
      <span >{{ user.name }}</span>
      <pre>{{message}}</pre>
    </div>
  `
})
export class UserComponent  {
  @Output() selectedUser = new EventEmitter<User>();
  @Input() user!: User;
  private cdr = inject(ChangeDetectorRef);
  selected = false;
  message = '🙏🏾'
  constructor() {
    setTimeout( () => {
      if(this.selected) {
        this.message = '😎'
      }
      else {
        this.message = '😭';
      }
      this.cdr.detectChanges();

    }, getRandomTime())
  }

 selectUser() {
    this.selected = !this.selected;
    this.message = 'Thanks!';
    this.selectedUser.emit(this.user)
  }
}
