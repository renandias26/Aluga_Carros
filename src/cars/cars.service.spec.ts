import { Test, TestingModule } from '@nestjs/testing';
import { CarsService } from './cars.service';

describe('CarsService', () => {
  let service: CarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarsService],
    }).compile();

    service = module.get<CarsService>(CarsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Valid Category', () => {
    /*
    Test if category has 3 differents cars models avaliable
      number between 0 and 3
      bool
      car name
      car brand
      car plate
      car model
    */
  })

  it('Select Random Car', () => {
    //Test if category has 3 differents cars models avaliable
  })
});
