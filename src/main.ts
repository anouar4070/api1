import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
//import { RolesGuard } from './guards/auth/roles/roles.guard';
//import dotenv from 'dotenv';
//dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.useGlobalGuards(new RolesGuard())
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }))
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();


/*     
                      *** DTO ***
import { IsString, IsInt } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;
}

                    *** Property not listed ***
                      {
  "name": "Anouar",
  "age": 25,
  "role": "admin"
}

** If whitelist: true only → "role" will be automatically deleted.

** If forbidNonWhitelisted: true → ❌ Request Rejected with error.

*/