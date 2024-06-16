import { Test, TestingModule } from '@nestjs/testing';
import { ItemMenuService } from './item_menu.service';

describe('ItemMenuService', () => {
  let service: ItemMenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemMenuService],
    }).compile();

    service = module.get<ItemMenuService>(ItemMenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
