import { Controller } from '@nestjs/common';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';

import {
  FindProductByIdDto,
  Product,
  ProductServiceController,
  ProductServiceControllerMethods,
} from '@proto/product';

@Controller('product')
@ProductServiceControllerMethods()
export class ProductController implements ProductServiceController {
  findOne(data: FindProductByIdDto): Product {
    return {
      id: 'abc',
      name: 'abcd',
      description: null,
      price: 100,
      quantity: 10,
      createdAt: new Date(),
      deletedAt: null,
      updatedAt: new Date(),
    };
  }
}
