/**
 * @license
 * Copyright TechHive.IO. All Rights Reserved.
 * Licensed under the CC-BY-4.0 License. See LICENSE in the project root for license information.
 */
import { Inject, Injectable } from '@nestjs/common';
import { RoleProvider } from './role.provider';
import { AclService } from './acl.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AccessCheckerService {
  constructor(
    protected roleProvider: RoleProvider,
    protected acl: AclService,
  ) {}

  /**
   * Checks whether access is granted or not
   *
   * @param {string} permission
   * @param {string} resource
   * @returns {Observable<boolean>}
   */
  isGranted(permission: string, resource: string): Observable<boolean> {
    return this.roleProvider.getRole().pipe(
      map((role: string | string[]) => (Array.isArray(role) ? role : [role])),
      map((roles: string[]) => {
        return roles.some((role) => this.acl.can(role, permission, resource));
      }),
    );
  }
}
