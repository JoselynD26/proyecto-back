import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemMenu } from './entities/item-menu.entity';
import { CreateItemMenuDto } from './dto/create-item_menu.dto';

@Injectable()
export class ItemMenuService {
  constructor(
    @InjectRepository(ItemMenu)
    private itemMenuRepository: Repository<ItemMenu>,
  ) {}

  async findAll(): Promise<ItemMenu[]> {
    return this.itemMenuRepository.find();
  }

  async findOne(id: number): Promise<ItemMenu> {
    return this.itemMenuRepository.findOne({ where: { id_item: id } });
  }

  async create(createItemMenuDto: CreateItemMenuDto): Promise<ItemMenu> {
    const newItemMenu = this.itemMenuRepository.create(createItemMenuDto);
    return this.itemMenuRepository.save(newItemMenu);
  }

  async update(id: number, updateItemMenuDto: CreateItemMenuDto): Promise<ItemMenu> {
    await this.itemMenuRepository.update(id, updateItemMenuDto);
    return this.itemMenuRepository.findOne({ where: { id_item: id } });
  }

  async delete(id: number): Promise<void> {
    await this.itemMenuRepository.delete(id);
  }
}
