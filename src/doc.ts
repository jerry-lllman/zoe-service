import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as packageConfig from '../package.json'

export const generateDocument = (app: NestFastifyApplication) => {

  // 更加精细的配置看文档 https://docs.nestjs.cn/8/recipes?id=swagger
  const options = new DocumentBuilder()
    .setTitle(packageConfig.name)
    .setDescription(packageConfig.description)
    .setVersion(packageConfig.version)
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/api/doc', app, document);
}