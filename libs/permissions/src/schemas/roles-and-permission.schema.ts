import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
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
  @Prop({ required: true, lowercase: true, trim: true, unique: true })
  role: string;

  @Prop([{ required: true, type: String, default: '*' }])
  permissions: string;

  @Prop({ required: true, type: Date })
  timestamp: Date;

}

export const RolesAndPermissionsSchema = SchemaFactory.createForClass(RolesAndPermission);
