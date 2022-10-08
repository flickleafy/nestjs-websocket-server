import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "{success: true}"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getHello()).toBe({
        success: true,
      });
    });
  });
});
