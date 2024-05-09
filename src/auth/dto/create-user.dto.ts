import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, Length, MaxLength } from 'class-validator';

export class CreateUserDto {

  @MaxLength(30,{message:'El correo es de maximo 30 caracteres'})
  @IsString({message:'Debe ser texto'})
  @IsEmail({}, { message: 'Favor de insertar un correo válido' })
  
  @IsNotEmpty({message:'El campo no puede estar vacio'})
  email: string;

  @IsString()
  @IsStrongPassword({},{message:'La contraseña no es totalmente segura'})
  @MaxLength(30,{message:'La contraseña es de maximo 30 caracteres'})
  @IsNotEmpty({ message: () => 'La contraseña no puede estar vacía' })
  password: string;
}