import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output, signal,
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
      <pre>{{message()}}</pre>
    </div>
  `
})
export class UserComponent  {
  @Output() selectedUser = new EventEmitter<User>();
  @Input() user!: User;

  selected = false;
  message = signal<string>('🙏🏾')
  constructor() {
    setTimeout( () => {
      if(this.selected) {
        this.message.set('😎')
      }
      else {
        this.message.update(v => '😭');
      }


    }, getRandomTime())
  }

 selectUser() {
    this.selected = !this.selected;
    this.message.update(() => 'Thanks!');
    this.selectedUser.emit(this.user)
  }
}
