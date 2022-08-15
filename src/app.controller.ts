import { Controller, Get, Version } from '@nestjs/common';
import { AppService } from './app.service';
import { BusinessException } from './common/exceptions/business.exception';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 用于伪造业务错误
  @Get('getError')
  getError() {
    const a: any = {}
    try { 
      console.log(a.b.c)
    } catch (err) {
      throw new BusinessException('参数错误')
    }
    return this.appService.getHello()
  }
}
