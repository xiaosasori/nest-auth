import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../enums/role.enum';
import {
  Permission,
  PermissionType,
} from 'src/iam/authorization/permission.type';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ enum: Role, default: Role.Regular })
  role: Role;

  // NOTE: moving the "permissions" column in combination with
  // the "role" likely does not make sense. We use both in this app
  // just to showcase two different approaches to authorization.
  @Column({ enum: Permission, default: [], type: 'json' })
  permissions: PermissionType[];

  @Column({ nullable: true })
  googleId: string;
}
