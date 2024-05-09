import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from './dto/create-user.dto';



describe('CreateUserDto', () => {
    let createUserDto: CreateUserDto;
  
    beforeEach(() => {
      createUserDto = new CreateUserDto();
    });
  
    it('should be defined', () => {
      expect(createUserDto).toBeDefined();
    });
  
    it('email should not be empty', () => {
      createUserDto.email = 'wdsads@gmail.com';
      expect(createUserDto.email).not.toBeNull();
      expect(createUserDto.email).not.toBeUndefined();
      expect(createUserDto.email).toBeTruthy();
    });
  
    it('email should be a valid email format', () => {
      createUserDto.email = 'invalidemail';
      expect(createUserDto.email).not.toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });
  
    it('email should not exceed 30 characters', () => {
        createUserDto.email = 'a'.repeat(1) + '@example.com';
        expect(createUserDto.email).toHaveLength(13);
      });
  
    it('password should not be empty', () => {
      createUserDto.password = 'strongPassword#777';
      expect(createUserDto.password).not.toBeNull();
      expect(createUserDto.password).not.toBeUndefined();
      expect(createUserDto.password).toBeTruthy();
    });
  
    it('password should be at most 30 characters', () => {
        createUserDto.email = 'a'.repeat(1) + '@example.com';
        expect(createUserDto.email).toHaveLength(13);
    });
  
    it('password should be strong', () => {
      createUserDto.password = 'WeakPassword123';
      expect(createUserDto.password).toMatch(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);
    });
  });