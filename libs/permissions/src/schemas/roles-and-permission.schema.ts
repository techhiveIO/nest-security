/**
 * @license
 * Copyright TechHive.IO. All Rights Reserved.
 * Licensed under the CC-BY-4.0 License. See LICENSE in the project root for license information.
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { SchemaOptions } from '@nestjs/mongoose/dist/decorators/schema.decorator';

const schemaOptions: SchemaOptions = {
  toJSON: {
    virtuals: true,
    versionKey: false,
    transform: (doc, result) => {
      delete result._id;
    },
  },
};

@Schema(schemaOptions)
export class RolesAndPermission extends Document {
  @Prop({ type: Types.ObjectId })
  parent: string;

  @Prop({ required: true, lowercase: true, trim: true, unique: true })
  role: string;

  @Prop([{ required: true, type: String, default: '*' }])
  permissions: string | string[];

  @Prop({ required: true, type: Date, default: new Date() })
  timestamp?: Date;
}

export const RolesAndPermissionsSchema = SchemaFactory.createForClass(
  RolesAndPermission,
);
