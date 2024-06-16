import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrito } from './entities/carrito.entity';
import { CreateCarritoDto } from './dto/create-carrito.dto';

@Injectable()
export class CarritoService {
  constructor(
    @InjectRepository(Carrito)
    private carritoRepository: Repository<Carrito>,
  ) {}

  async findAll(): Promise<Carrito[]> {
    return this.carritoRepository.find();
  }

  async findOne(id: number): Promise<Carrito> {
    return this.carritoRepository.findOne({ where: { id_carrito: id } });
  }

  async create(createCarritoDto: CreateCarritoDto): Promise<Carrito> {
    const newCarrito = this.carritoRepository.create(createCarritoDto);
    return this.carritoRepository.save(newCarrito);
  }

  async update(id: number, updateCarritoDto: CreateCarritoDto): Promise<Carrito> {
    await this.carritoRepository.update(id, updateCarritoDto);
    return this.carritoRepository.findOne({ where: { id_carrito: id } });
  }

  async delete(id: number): Promise<void> {
    await this.carritoRepository.delete(id);
  }
}
