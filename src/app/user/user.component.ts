import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input, OnInit,
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
export class UserComponent implements OnInit  {
  @Output() selectedUser = new EventEmitter<User>();
  @Input() user!: User;

  selected = false;
  message = signal<string>('🙏🏾')


  ngOnInit(): void {
    setTimeout( () => {
      this.setUserTimout()
    }, 1000)

  }

  setUserTimout() {
    this.user.time = getRandomTime()
    this.selectedUser.emit(this.user);
    setTimeout( () => {
      if(this.selected) {
        this.message.set('😎')
      }
      else {
        this.message.update(v => '😭');
      }


    }, this.user.time)

  }

 selectUser() {
    this.selected = !this.selected;
    this.message.update(() => 'Thanks!');
    this.selectedUser.emit(this.user)
  }
}
