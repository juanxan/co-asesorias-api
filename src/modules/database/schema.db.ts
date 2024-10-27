import {
  AutoIncrement,
  BelongsTo,
  Column,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Countries } from './countries.db';

@Table({
  tableName: 'users',
})
export class Users extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ allowNull: false })
  id: number;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  last_name: string;

  @Column({ allowNull: false })
  phone: string;

  @Column({ allowNull: false })
  email: string;

  @Column({ allowNull: false })
  password: string;

  @Column({ allowNull: false })
  document: number;

  @Column({ allowNull: false })
  birthday: Date;

  @Default(1)
  @Column({ allowNull: false })
  id_status: number;

  // Relación de muchos a uno con Countries
  @ForeignKey(() => Countries)
  @Column({ allowNull: false })
  country_id: number;

  @BelongsTo(() => Countries)
  country: Countries;
}
