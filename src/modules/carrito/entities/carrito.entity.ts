import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ItemMenu } from '../../item_menu/entities/item-menu.entity';

@Entity()
export class Carrito {
  @PrimaryGeneratedColumn()
  id_carrito: number;

  @Column()
  id_item: number;

  @Column()
  cantidad: number;

  @ManyToOne(() => ItemMenu, itemMenu => itemMenu.id_item)
  @JoinColumn({ name: 'id_item' })
  item: ItemMenu;
}
