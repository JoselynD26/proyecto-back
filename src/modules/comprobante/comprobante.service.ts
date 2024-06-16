import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comprobante } from './entities/comprobante.entity';
import { CreateComprobanteDto } from './dto/create-comprobante.dto';

@Injectable()
export class ComprobanteService {
  constructor(
    @InjectRepository(Comprobante)
    private comprobanteRepository: Repository<Comprobante>,
  ) {}

  async findAll(): Promise<Comprobante[]> {
    return this.comprobanteRepository.find();
  }

  async findOne(id: number): Promise<Comprobante> {
    return this.comprobanteRepository.findOne({ where: { id_comprobante: id } });
  }

  async create(createComprobanteDto: CreateComprobanteDto): Promise<Comprobante> {
    const newComprobante = this.comprobanteRepository.create(createComprobanteDto);
    return this.comprobanteRepository.save(newComprobante);
  }

  async update(id: number, updateComprobanteDto: CreateComprobanteDto): Promise<Comprobante> {
    await this.comprobanteRepository.update(id, updateComprobanteDto);
    return this.comprobanteRepository.findOne({ where: { id_comprobante: id } });
  }

  async delete(id: number): Promise<void> {
    await this.comprobanteRepository.delete(id);
  }
}
