import { Test, TestingModule } from '@nestjs/testing';
import { ItemMenuController } from './item_menu.controller';

describe('ItemMenuController', () => {
  let controller: ItemMenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemMenuController],
    }).compile();

    controller = module.get<ItemMenuController>(ItemMenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
