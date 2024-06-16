import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ItemMenuService } from './item_menu.service';
import { ItemMenu } from './entities/item-menu.entity';
import { CreateItemMenuDto } from './dto/create-item_menu.dto';

@Controller('item-menu')
export class ItemMenuController {
  constructor(private readonly itemMenuService: ItemMenuService) {}

  @Get()
  findAll(): Promise<ItemMenu[]> {
    return this.itemMenuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ItemMenu> {
    return this.itemMenuService.findOne(+id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemMenuDto): Promise<ItemMenu> {
    return this.itemMenuService.create(createItemDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateItemDto: CreateItemMenuDto): Promise<ItemMenu> {
    return this.itemMenuService.update(+id, updateItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.itemMenuService.delete(+id);
  }
}
