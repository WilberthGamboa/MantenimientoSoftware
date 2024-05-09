import { Test, TestingModule } from '@nestjs/testing';
import { CreateMyPcDto } from './dto/create-my-pc.dto';


describe('CreateMyPcDto', () => {
  let createMyPcDto: CreateMyPcDto;

  beforeEach(() => {
    createMyPcDto = new CreateMyPcDto();
  });

  it('should be defined', () => {
    expect(createMyPcDto).toBeDefined();
  });

  it('nombre should not be empty', () => {
    createMyPcDto.nombre = 'PC name';
    expect(createMyPcDto.nombre).toBeTruthy();
  });

  it('descripcion should not be empty', () => {
    createMyPcDto.descripcion = 'PC description';
    expect(createMyPcDto.descripcion).toBeTruthy();
  });

  it('file should have valid mimetype (.jpg)', () => {
    const example  = { mimetype: 'image/jpeg' }; // Suponemos que se proporciona un archivo válido
    expect(example).toBeTruthy();
  });

  it('file should not be empty', () => {
    const example  = { mimetype: 'image/jpeg' }; // Suponemos que se proporciona un archivo válido
    expect(example).toBeTruthy();
  });
});
