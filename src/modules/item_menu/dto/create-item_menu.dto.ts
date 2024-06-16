import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateItemMenuDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsNumber()
  precio: number;

  @IsNotEmpty()
  @IsNumber()
  id_categoria: number;
}
