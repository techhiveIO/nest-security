export interface AclRole {
  parent?: string;

  [permission: string]: string | string[] | undefined;
}

export interface AccessControl {
  [role: string]: AclRole;
}

export interface AclOptions {
  accessControl?: AccessControl;
  override?: boolean;
}

export const TH_SECURITY_OPTIONS_TOKEN = 'CONFIG_OPTIONS';
