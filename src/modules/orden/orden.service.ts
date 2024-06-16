import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orden } from './entities/orden.entity';
import { CreateOrdenDto } from './dto/create-orden.dto';

@Injectable()
export class OrdenService {
  constructor(
    @InjectRepository(Orden)
    private ordenRepository: Repository<Orden>,
  ) {}

  async findAll(): Promise<Orden[]> {
    return this.ordenRepository.find();
  }

  async findOne(id: number): Promise<Orden> {
    return this.ordenRepository.findOne({ where: { id_orden: id } });
  }

  async create(createOrdenDto: CreateOrdenDto): Promise<Orden> {
    const newOrden = this.ordenRepository.create(createOrdenDto);
    return this.ordenRepository.save(newOrden);
  }

  async update(id: number, updateOrdenDto: CreateOrdenDto): Promise<Orden> {
    await this.ordenRepository.update(id, updateOrdenDto);
    return this.ordenRepository.findOne({ where: { id_orden: id } });
  }

  async delete(id: number): Promise<void> {
    await this.ordenRepository.delete(id);
  }
}
