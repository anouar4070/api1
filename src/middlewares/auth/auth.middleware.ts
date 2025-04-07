import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // * Authentication
    // *1 verify token
    const token = req.headers['authorization']?.split(' ')[1];

    // *2 invalid token throw a new exception (401)
    if (!token) {
      res.status(HttpStatus.UNAUTHORIZED).json({
        message: 'Invalid token provided',
      });
    }

    // *4 verify the token

    // *5 valid token continue to the next middleware

    next();
  }
}
