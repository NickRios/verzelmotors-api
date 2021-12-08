import { IsNotEmpty } from 'class-validator';

export class UpdateImageCarProps {
  @IsNotEmpty({ message: 'Informe uma foto.' })
  image: string;
}
