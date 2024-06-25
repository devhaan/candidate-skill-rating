import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<string> {
    try {
      if (createUserDto.password !== createUserDto.passwordConfirm) {
        throw new Error('Passwords do not match');
      }

    
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(createUserDto.password, salt);


      const newUser = new this.userModel({
        username: createUserDto.username,
        email: createUserDto.email,
        password: hashedPassword,
        role: createUserDto.role,
        phone_no: createUserDto.phone_no,
      });

      // Save the user to the database
      const createdUser = await newUser.save();
      console.log(createdUser); // Log the created user object if needed

      return 'Signed Up successfully';
    } catch (error) {
      console.log(error);
      throw new Error('Failed to sign up');
    }
  }

  async findOne(username: string): Promise<User | null> {
    return await this.userModel.findOne({ username }).exec();
  }
}
