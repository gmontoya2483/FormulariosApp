import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {emailPattern, nombreApellidoPattern, noPuedeSerStrider} from '../../../shared/validator/validaciones';
import {ValidatorService} from '../../../shared/validator/validator.service';
import {EmailValidatorService} from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    if ( errors?.required) {
      return 'El correo electrónico es obligatorio';
    }

    if (errors?.pattern) {
      return 'El correo electrónico debe tener un formato válido';
    }

    if (errors?.emailTomado) {
      return 'El correo electrónico ya ha sido tomado';
    }
    return '';
  }

  constructor( private fb: FormBuilder,
               private validatorService: ValidatorService,
               private emailValidator: EmailValidatorService){ }

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator] ],
    username: ['', [Validators.required, this.validatorService.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [this.validatorService.camposIguales('password', 'password2')]
  });



  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Jose Jose',
      email: 'test1@test.com',
      username: 'strider_85',
      password: '123456',
      password2: '123456'
    });
  }

  campoNoValido( campo: string ): boolean | undefined {
    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched;


  }

  submitFormulario(): void {
    if ( this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }

}
