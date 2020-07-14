import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const mongooseOptions: MongooseModuleOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  retryAttempts: 4,
};

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGODB_CONNECTION_STRING,
      mongooseOptions,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
