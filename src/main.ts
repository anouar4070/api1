import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { RolesGuard } from './guards/auth/roles/roles.guard';
//import dotenv from 'dotenv';
//dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.useGlobalGuards(new RolesGuard())
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
