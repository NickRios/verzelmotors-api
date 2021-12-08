import { IsNotEmpty, Length } from 'class-validator';

const MIN_NAME = 1;
const MAX_NAME = 100;

export class CreateCarProps {
  @IsNotEmpty({ message: 'Informe um nome.' })
  @Length(MIN_NAME, MAX_NAME, {
    message: `O nome deve conter entre ${MIN_NAME} e ${MAX_NAME} caracteres.`,
  })
  name: string;

  @IsNotEmpty({ message: 'Informe uma marca.' })
  @Length(MIN_NAME, MAX_NAME, {
    message: `O nome da marca deve conter entre ${MIN_NAME} e ${MAX_NAME} caracteres.`,
  })
  brand: string;

  @IsNotEmpty({ message: 'Informe um modelo.' })
  @Length(MIN_NAME, MAX_NAME, {
    message: `O modelo deve conter entre ${MIN_NAME} e ${MAX_NAME} caracteres.`,
  })
  model: string;

  @IsNotEmpty({ message: 'Informe um modelo.' })
  @Length(MIN_NAME, MAX_NAME, {
    message: `A versão deve conter entre ${MIN_NAME} e ${MAX_NAME} caracteres.`,
  })
  car_trim: string;

  @IsNotEmpty({ message: 'Informe a kilometragem.' })
  km: number;

  @IsNotEmpty({ message: 'Informe o ano.' })
  year: number;

  @IsNotEmpty({ message: 'Informe o preço.' })
  price: number;

  @IsNotEmpty({ message: 'Informe o câmbio.' })
  @Length(MIN_NAME, MAX_NAME, {
    message: `O câmbio deve conter entre ${MIN_NAME} e ${MAX_NAME} caracteres.`,
  })
  transmission: string;

  @IsNotEmpty({ message: 'Informe a cor.' })
  @Length(MIN_NAME, MAX_NAME, {
    message: `A cor deve conter entre ${MIN_NAME} e ${MAX_NAME} caracteres.`,
  })
  color: string;

  @IsNotEmpty({ message: 'Informe o estado.' })
  @Length(MIN_NAME, MAX_NAME, {
    message: `O local deve conter entre ${MIN_NAME} e ${MAX_NAME} caracteres.`,
  })
  location: string;

  @IsNotEmpty({ message: 'Informe o estado.' })
  @Length(MIN_NAME, MAX_NAME, {
    message: `O estado deve conter entre ${MIN_NAME} e ${MAX_NAME} caracteres.`,
  })
  region: string;

  @IsNotEmpty({ message: 'Informe uma foto.' })
  image: string;
}
