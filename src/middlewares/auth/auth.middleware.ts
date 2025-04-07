import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
//import jwt from 'jsonwebtoken';
import * as jwt from "jsonwebtoken";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // * Authentication
    // *1 verify token
    const token = req.headers['authorization']?.split(' ')[1];

    // *2 invalid token throw a new exception (401)
    if (!token) {
      res.status(HttpStatus.UNAUTHORIZED).json({
        message: 'Unauthorized',
      });
    }

    // *3 verify the token
    console.log(process.env.JWT_SECRET)
    //"!" right after process.env.JWT_KEY actually, exclamation (!) says, hey typescript, don't worry, don't check this.
    //const decoded = jwt.verify(token, process.env.JWT_SECRET!);
  
    // if (!decoded) {
    //   return res.status(HttpStatus.UNAUTHORIZED).json({
    //     message: 'Invalid token provided',
    //   });
    // }

    // *4 valid token continue to the next middleware

    next();
  }
}
