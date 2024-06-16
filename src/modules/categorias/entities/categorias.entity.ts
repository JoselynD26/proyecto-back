import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ItemMenu } from '../../item_menu/entities/item-menu.entity';

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id_categoria: number;

  @Column()
  nombre: string;

  @Column('text')
  descripcion: string;

  @OneToMany(() => ItemMenu, itemMenu => itemMenu.categoria)
  items: ItemMenu[];
}
