import { IsNotEmpty, IsString, ValidationArguments } from 'class-validator';
import { MemoryStoredFile } from 'nestjs-form-data';

export class CreateMyPcDto {

  nombre: string;


  descripcion: string;



  file: MemoryStoredFile;
}
