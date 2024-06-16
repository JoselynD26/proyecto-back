import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ComprobanteService } from './comprobante.service';
import { Comprobante } from './entities/comprobante.entity';
import { CreateComprobanteDto } from './dto/create-comprobante.dto';

@Controller('comprobante')
export class ComprobanteController {
  constructor(private readonly comprobanteService: ComprobanteService) {}

  @Get()
  findAll(): Promise<Comprobante[]> {
    return this.comprobanteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Comprobante> {
    return this.comprobanteService.findOne(+id);
  }

  @Post()
  create(@Body() createComprobanteDto: CreateComprobanteDto): Promise<Comprobante> {
    return this.comprobanteService.create(createComprobanteDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateComprobanteDto: CreateComprobanteDto): Promise<Comprobante> {
    return this.comprobanteService.update(+id, updateComprobanteDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.comprobanteService.delete(+id);
  }
}
