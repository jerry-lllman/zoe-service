import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getConfig } from './utils';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true, // 不使用默认的 .env 文件
      isGlobal: true,
      load: [getConfig]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
