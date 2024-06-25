// candidate-response.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CandidateResponseDocument = CandidateResponse & Document;

@Schema()
export class CandidateResponse {
  @Prop({ required: true })
  skillId: number;

  @Prop({ required: true, enum: ['easy', 'medium', 'hard'] })
  difficulty_level: string;

  @Prop({ required: true })
  question: string;

  @Prop({ required: true })
  response: string;

  @Prop({ type: Number })
  rating: number;
}

export const CandidateResponseSchema = SchemaFactory.createForClass(CandidateResponse);
