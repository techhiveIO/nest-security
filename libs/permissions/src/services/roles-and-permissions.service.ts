import { Inject, Injectable, OnModuleInit, Optional } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { RolesAndPermission } from '../schemas/roles-and-permission.schema';
import { AccessControl, AclOptions, TH_SECURITY_OPTIONS_TOKEN } from '@th/permissions/security.options';
import { popParent, shallowArrayClone, shallowObjectClone } from '@th/permissions/utils';

interface modelInterface {
  parent: string;
  role: string;
  abilities: any;
  // permission: string;
  // resources: string | string[];
}

@Injectable()
export class RolesAndPermissionsService implements OnModuleInit {
  constructor(
    @Optional()
    @Inject(TH_SECURITY_OPTIONS_TOKEN)
    protected settings: AclOptions = {},
    // @InjectModel(RolesAndPermission.name)
    // private readonly rolesAndPermissionsModel: Model<RolesAndPermission>,
  ) {
  }

  async onModuleInit(): Promise<void> {
    // console.log('INITIALIZED');
    // const availableRolesAndPermissions = await this.checkRegisteredRolesAndPermissions();
    // console.log(availableRolesAndPermissions);
    // const accessControl = this.settings.accessControl;
    // if (accessControl && !availableRolesAndPermissions.length) {
    //   console.log('populate roles and permissions collection');
    //   this.populateRolesAndPermissionsCollection(accessControl);
    // }
  }

  /**
   *
   * { guest: { parent: null, view: [ 'news', 'comments' ] } }
   {
    guest: { parent: null, view: [ 'news', 'comments' ] },
    user: { parent: 'guest', create: [ 'comments' ] }
    },
   {
    guest: { parent: null, view: [ 'news', 'comments' ] },
    user: { parent: 'guest', create: [ 'comments' ] },
    moderator: { parent: 'user', create: [ 'news' ], remove: [ '*' ] }
   }
   */
  private async constructModel(model: modelInterface): Promise<void> {
    try {
      console.log(model);
      // await this.rolesAndPermissionsModel.findOneAndUpdate({role}, { parent, role, permissions }, {upsert: true});
    } catch (e) {
      console.error(e);
    }
  }

  // async checkRegisteredRolesAndPermissions(): Promise<RolesAndPermission[]> {
  //   return await this.rolesAndPermissionsModel.find().exec();
  // }

  populateRolesAndPermissionsCollection(list: AccessControl) {
    for (const [role, value] of Object.entries(list)) {
      const abilities = shallowObjectClone(value);
      const parent = popParent(abilities) || null;
      // this.register(role, parent, abilities);
      console.log(parent, shallowArrayClone(abilities), role);
    }
  }
}
