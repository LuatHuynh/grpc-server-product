import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';
import { PRODUCT_PACKAGE_NAME } from '@proto/product';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: PRODUCT_PACKAGE_NAME,
        protoPath: join(__dirname, '../proto/product.proto'),
        url: 'localhost:4000',
      },
    },
  );

  await app.listen();
}
bootstrap();
