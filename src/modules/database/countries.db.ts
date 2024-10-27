import {
  AutoIncrement,
  Column,
  Default,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'countries',
})
export class Countries extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ allowNull: false })
  id: number;

  @Column({ allowNull: false })
  name: string;

  @Default(1)
  @Column({ allowNull: false })
  id_status: number;
}
