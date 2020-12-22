import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@nx-workspace/data-models';

@Component({
  selector: 'nx-workspace-layout-form',
  templateUrl: './layout-form.component.html',
  styleUrls: ['./layout-form.component.scss'],
})
export class LayoutFormComponent implements OnInit {
  @Input() user: User | null = null;
  @Output() userLoggedOut = new EventEmitter<User>();

  constructor() {}

  ngOnInit(): void {}

  logout() {
    this.userLoggedOut.emit();
  }
}
