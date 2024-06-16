import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comprobante } from './entities/comprobante.entity';
import { ComprobanteController } from './comprobante.controller';
import { ComprobanteService } from './comprobante.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comprobante])],
  controllers: [ComprobanteController],
  providers: [ComprobanteService],
})
export class ComprobanteModule {}
