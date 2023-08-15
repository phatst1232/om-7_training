import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Permission } from './permission.entity';

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  description: string;

  @Column({ length: 50 })
  status: string;

  @ManyToMany(() => Permission)
  @JoinTable()
  permissions: Permission[];
}
