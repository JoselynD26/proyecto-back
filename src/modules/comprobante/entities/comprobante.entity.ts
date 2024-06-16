import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Orden } from '../../orden/entities/orden.entity';

@Entity()
export class Comprobante {
  @PrimaryGeneratedColumn()
  id_comprobante: number;

  @Column()
  id_orden: number;

  @Column()
  numero_comprobante: number;

  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  @Column()
  fecha: Date;

  @ManyToOne(() => Orden, orden => orden.id_orden)
  @JoinColumn({ name: 'id_orden' })
  orden: Orden;
}
