// user.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, enum: ['candidate', 'reviewer'] })
  role: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, default: true })
  active: boolean;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  phone_no: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
