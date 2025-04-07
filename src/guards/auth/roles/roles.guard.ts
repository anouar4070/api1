import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Roles } from 'src/decorators/roles/roles.decorator';
import { SystemRoles } from './roles.enum';
import { ForbiddenException } from 'src/errors/forbidden.exception';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles: SystemRoles[] = this.reflector.get<SystemRoles[]>(
      'roles',
      context.getHandler(),
    );
    //console.log('roles', roles)
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    //console.log('user', user)
    //console.log('log', roles.some(role => user.roles.includes(role)))

    if (!user) {
      throw new ForbiddenException()
    }

    return roles.some((role) => user.roles.includes(role));
    /**  By using every(), you should have exact roles:
     *  @Roles('ADMIN', 'MANAGER') in 'dashboard.controller.ts'
     *  roles: ['ADMIN','MANAGER'] in 'auth.middleware.ts'
     *  return roles.every(role => user.roles.includes(role))   */

    //return matchRoles(roles, user.roles);
  }
}
