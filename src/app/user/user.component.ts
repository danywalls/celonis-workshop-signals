import {
  ChangeDetectionStrategy,
  Component, computed, effect,
  EventEmitter, input, model,
  OnInit,
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
      <span >{{ user().name }}</span>

       <pre>{{message()}}</pre>
    </div>
  `
})
export class UserComponent   {
  user =  model.required<User>();
  userWithTime = computed(() => ( { ...this.user(), time: getRandomTime()}));
  selected = false;
  message = signal<string>('🙏🏾')

  effectEmoji = effect(() => {
    setTimeout( () => {
      if(this.selected) {
        this.message.set('😎')
      }
      else {
        this.message.update(v => '😭');
      }
    }, this.userWithTime().time)
  })



 selectUser() {
    this.selected = !this.selected;
    this.message.update(() => 'Thanks!');
    this.user.update( u => ({ ...this.userWithTime() }))
  }
}
