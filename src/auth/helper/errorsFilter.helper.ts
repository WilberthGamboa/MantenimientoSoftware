import { Injectable } from '@nestjs/common';
import { AuthFormErros } from '../interfaces/AuthFormErros.interfaces';
@Injectable()
export class ErrorsFilter {
  public register(errorMessages: string | string[]): AuthFormErros {
    const authFormErros: AuthFormErros = {
      email: [],
      everyone: [],
      password: [],
    };

   
    return authFormErros;
  }
  /* Esta validación se realiza debido a que la implementación de la librería envía automáticamente el valor de Unauthorized 
  esta implemetación envia mensajes personalizados*/
  public login(errorMessages: string | string[], body: any): AuthFormErros {
    const authFormErros: AuthFormErros = {
      email: [],
      everyone: [],
      password: [],
    };
  
    return authFormErros;
  }
}
