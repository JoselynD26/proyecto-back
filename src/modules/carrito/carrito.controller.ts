import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { Carrito } from './entities/carrito.entity';
import { CreateCarritoDto } from './dto/create-carrito.dto';

@Controller('carrito')
export class CarritoController {
  constructor(private readonly carritoService: CarritoService) {}

  @Get()
  findAll(): Promise<Carrito[]> {
    return this.carritoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Carrito> {
    return this.carritoService.findOne(+id);
  }

  @Post()
  create(@Body() createCarritoDto: CreateCarritoDto): Promise<Carrito> {
    return this.carritoService.create(createCarritoDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCarritoDto: CreateCarritoDto): Promise<Carrito> {
    return this.carritoService.update(+id, updateCarritoDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.carritoService.delete(+id);
  }
}
