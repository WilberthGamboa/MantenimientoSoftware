import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, Length, Max } from 'class-validator';

export class CreateUserDto {

  @Length(1, 30,{message:'El límite de la correo  es de 30 caracteres y mínimo 1'})
  @IsString({message:'Debe ser texto'})
  @IsEmail({}, { message: 'Favor de insertar un correo válido' })
  
  @IsNotEmpty({message:'El campo no puede estar vacio'})
  email: string;

  @IsString()
  @IsStrongPassword({},{message:'La contraseña no es totalmente segura'})
  @Length( 10,30,{message:'El límite de la contraseña  es de mínimo 10 y máximo 30'})
  @IsNotEmpty({ message: () => 'La contraseña no puede estar vacía' })
  password: string;
}