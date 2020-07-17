/**
 * @license
 * Copyright TechHive.IO. All Rights Reserved.
 * Licensed under the CC-BY-4.0 License. See LICENSE in the project root for license information.
 */

import { Observable } from 'rxjs';

export abstract class RoleProvider {

  /**
   * Returns current user role
   * @returns {Observable<string | string[]>}
   */
  abstract getRole(): Observable<string | string[]>;
}
