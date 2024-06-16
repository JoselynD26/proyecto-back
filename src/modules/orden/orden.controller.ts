import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { OrdenService } from './orden.service';
import { Orden } from './entities/orden.entity';
import { CreateOrdenDto } from './dto/create-orden.dto';

@Controller('orden')
export class OrdenController {
  constructor(private readonly ordenService: OrdenService) {}

  @Get()
  findAll(): Promise<Orden[]> {
    return this.ordenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Orden> {
    return this.ordenService.findOne(+id);
  }

  @Post()
  create(@Body() createOrdenDto: CreateOrdenDto): Promise<Orden> {
    return this.ordenService.create(createOrdenDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateOrdenDto: CreateOrdenDto): Promise<Orden> {
    return this.ordenService.update(+id, updateOrdenDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.ordenService.delete(+id);
  }
}
