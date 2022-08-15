import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getConfig } from './utils';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    process.env.RUNNING_ENV = 'dev'

    const app: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          ignoreEnvFile: true, // 不使用默认的 .env 文件
          isGlobal: true,
          load: [getConfig]
        })
      ],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });

    it('get test env name', () => {
      expect(appController.getTestName()).toBe('__dev__')
    })
  });
});
