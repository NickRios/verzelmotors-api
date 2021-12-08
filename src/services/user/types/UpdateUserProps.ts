import { IsEmail, IsNotEmpty, Length } from 'class-validator';

const MIN_NAME = 1;
const MAX_NAME = 100;

export class UpdateUserProps {
  @IsNotEmpty({ message: 'Informe um nome.' })
  @Length(MIN_NAME, MAX_NAME, {
    message: `O nome deve conter entre ${MIN_NAME} e ${MAX_NAME} caracteres.`,
  })
  name: string;

  @IsEmail(
    { allow_ip_domain: false },
    {
      message: 'Informe um email valido.',
    },
  )
  email: string;
}
