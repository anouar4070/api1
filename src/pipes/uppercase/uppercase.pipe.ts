import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform {

  transform(value: any, metadata: ArgumentMetadata) {
//* title => request body
//* check if the product title is string!
if(!value.title || typeof value.title !== 'string') {
  throw new BadRequestException(
    'Invalid product title, it must be a string',
  )
}

    //return value.title.toUpperCase();
    return value;
  }
}
