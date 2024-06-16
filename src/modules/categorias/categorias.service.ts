import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categorias.entity';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    const categoria = this.categoriaRepository.create(createCategoriaDto as Categoria);
    return this.categoriaRepository.save(categoria);
  }

  findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  findOne(id: number): Promise<Categoria> {
    return this.categoriaRepository.findOne({ where: { id_categoria: id } });
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto): Promise<Categoria> {
    await this.categoriaRepository.update(id, updateCategoriaDto as Categoria);
    return this.categoriaRepository.findOne({ where: { id_categoria: id } });
  }

  async remove(id: number): Promise<void> {
    await this.categoriaRepository.delete(id);
  }
}
