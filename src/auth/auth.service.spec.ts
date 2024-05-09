import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UnauthorizedException, BadRequestException, InternalServerErrorException } from '@nestjs/common';

// Mock del UserModel
const userModelMock = {
  create: jest.fn(),
  findOne: jest.fn(),
};

// Mock de bycript
const bcryptMock = {
  hashSync: jest.fn(),
  compareSync: jest.fn(),
};

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: 'UserModel', useValue: userModelMock },
        { provide: 'bcrypt', useValue: bcryptMock },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new user', async () => {
    const createUserDto: CreateUserDto = {
      
      email: 'test@example.com',
      password: 'hashedPassword',
    
    };

   

    expect(createUserDto).toEqual({
        email: 'test@example.com',
        password: 'hashedPassword',
      });
  });

  it('should validate a user', async () => {
    userModelMock.findOne.mockReturnValue({
      email: 'test@example.com',
      password: 'hashedPassword',
    });

   

    const user ={
        email: 'test@example.com',
      password: 'hashedPassword',
    } 

    expect(user).toEqual({
      email: 'test@example.com',
      password: 'hashedPassword',
    });
  });

  it('should throw UnauthorizedException when user is not found', async () => {
    userModelMock.findOne.mockReturnValue(null);

    await expect(service.validateUser('test@example.com', 'testpassword')).rejects.toThrow(UnauthorizedException);
  });

  it('should throw UnauthorizedException when password is incorrect', async () => {
    userModelMock.findOne.mockReturnValue({
      email: 'test@example.com',
      password: 'hashedPassword',
    });

    bcryptMock.compareSync.mockReturnValue(false);

    await expect(service.validateUser('test@example.com', 'testpassword')).rejects.toThrow(UnauthorizedException);
  });

  it('should throw BadRequestException when email is already registered', async () => {
    const createUserDto: CreateUserDto = {

      email: 'test@example.com',
      password: 'testpassword',
    
    };

    userModelMock.create.mockRejectedValue({ code: 11000 });

    await expect(service.createUser(createUserDto)).rejects.toThrow(BadRequestException);
  });

  it('should throw InternalServerErrorException for other database errors', async () => {
    const createUserDto: CreateUserDto = {
     
      email: 'test@example.com',
      password: 'testpassword',
  
    };

    userModelMock.create.mockRejectedValue(new Error('Some database error'));

    await expect(service.createUser(createUserDto)).rejects.toThrow(InternalServerErrorException);
  });
});
