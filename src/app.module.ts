import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CandicateResponseModule } from './candicate-response/candicate-response.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://devemahore:dev07dev@cluster0.ilbnywt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    ),
    UsersModule,
    CandicateResponseModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
