import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CustomException } from 'src/exceptions/CustomException';

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    console.log(createProductDto);
    const { price } = createProductDto;
    if (price >= 500) {
      throw new CustomException(
        'Product price must be low than 500',
        HttpStatus.BAD_REQUEST,
      );
    }
    //throw new Error('Error creating');
    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
