import { PartialType } from '@nestjs/mapped-types';
import { CreateMyPcDto } from './create-my-pc.dto';
import {  MemoryStoredFile } from 'nestjs-form-data';

export class UpdateMyPcDto extends PartialType(CreateMyPcDto) {
  id: string;


  nombre?: string;


  descripcion?: string;


  file?: MemoryStoredFile;
}
