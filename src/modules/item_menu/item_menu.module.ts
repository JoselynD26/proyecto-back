import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemMenuController } from './item_menu.controller';
import { ItemMenuService } from './item_menu.service';
import { ItemMenu } from './entities/item-menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemMenu])],
  controllers: [ItemMenuController],
  providers: [ItemMenuService],
})
export class ItemMenuModule {}
