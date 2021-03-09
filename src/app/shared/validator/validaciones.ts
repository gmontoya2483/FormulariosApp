import {FormControl} from '@angular/forms';

export const nombreApellidoPattern = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

export const noPuedeSerStrider = (control: FormControl): { noStrider: boolean } | null => {
  const valor = control.value?.trim().toLowerCase();
  if (valor === 'strider') {
    // retrun ERROR !!!
    return {
      noStrider: true
    };
  }

  return null;
};

