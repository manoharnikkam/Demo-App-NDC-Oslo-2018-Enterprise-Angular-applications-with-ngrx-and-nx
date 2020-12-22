import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Authenticate } from '@nx-workspace/data-models';

@Component({
  selector: 'nx-workspace-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  authenticate: Authenticate = { username: '', password: '' };
  @Output() loginSubmitted = new EventEmitter<Authenticate>();

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  hide = true;

  constructor() {}

  ngOnInit(): void {}

  login() {
    this.loginSubmitted.emit({
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    } as Authenticate);

    // this.loginSubmitted.emit(authenticate);
  }
}
