import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Categoria } from '../../categorias/entities/categorias.entity';

@Entity()
export class ItemMenu {
  @PrimaryGeneratedColumn()
  id_item: number;

  @Column()
  nombre: string;

  @Column('text')
  descripcion: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @ManyToOne(() => Categoria, categoria => categoria.items)
  categoria: Categoria;
}
