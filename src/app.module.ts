import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemMenuModule } from './modules/item_menu/item_menu.module';
import { ComprobanteModule } from './modules/comprobante/comprobante.module';
import { CategoriasModule } from './modules/categorias/categorias.module';
import { OrdenModule } from './modules/orden/orden.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que las variables de entorno estén disponibles globalmente
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: +process.env.PORT,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      autoLoadEntities: true,
      synchronize: true, // Solo para desarrollo, desactiva en producción
    }),
    OrdenModule,
    ItemMenuModule,
    ComprobanteModule,
    CategoriasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


