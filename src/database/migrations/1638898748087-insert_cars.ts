import { MigrationInterface, QueryRunner } from 'typeorm';

export class insertCars1638898748087 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO "car"
                (name, brand, model, car_trim, km, year, price, transmission, color, region, location, image)
            VALUES
                ('X3', 'BMW', 'X3', '1.5 16V TURBO', '101354', '2018', '130800', 'AUTOMÁTICO', 'BRANCO', 'São Paulo - SP', 'Shopping', 'https://production.autoforce.com/uploads/version/profile_image/5270/comprar-xdrive30e_bd3ce80332.png'),
                ('RENEGATE', 'JEEP', 'RENEGATE', '1.8 16V', '57500', '2019', '90990', 'AUTOMÁTICO', 'PRETO', 'São Paulo - SP', 'Shopping', 'https://jeep.grupoleauto.com.br/images/novos/jeep/veiculos/xfoto890_26450.png.pagespeed.ic.XqlKCFPs9s.png'),
                ('CIVIC', 'HONDA', 'CIVIC', '1.5 16V TURBO', '101354', '2018', '136750', 'MANUAL', 'CINZA', 'São Paulo - SP', 'Shopping', 'https://www.honda.com.br/automoveis/sites/hab/files/2017-03/CIVIC_EX.png'),
                ('COROLLA', 'TOYOTA', 'COROLLA', '2.0 XEI 16V', '42300', '2020', '119990', 'AUTOMÁTICO', 'PRETO', 'São Paulo - SP', 'Shopping', 'https://www.ontake.com.br/assets/images/models/corolla/colors/Corolla_PretoEclipse.png'),
                ('GOLF', 'VOLKSWAGEN', 'GOLF', '2.0 TSI GTI 16V', '68000', '2015', '129990', 'MANUAL', 'VERMELHO', 'São Paulo - SP', 'Shopping', 'https://grandebelem.com.br/assets/uploads/nt_veiculos/85966-veiculo-golf.png?v=0.3'),
                ('C3', 'CITROEN', 'C3', '1.6 VTI 120', '77000', '2017', '47990', 'MANUAL', 'BRANCO', 'São Paulo - SP', 'Shopping', 'https://pngimg.com/uploads/citroen/citroen_PNG8.png'),
                ('T-CROSS', 'VOLKSWAGEN', 'T-CROSS', '1.0 200 TSI', '46000', '2020', '102890', 'AUTOMÁTICO', 'BRONZE', 'São Paulo - SP', 'Shopping', 'https://www.nacionalvw.com.br/storage/templates/28/volkswagen-t-cross-2020-2021-versao-Highline-250-TSI-frontal.png'),
                ('XC40', 'VOLVO', 'XC40', '1.5 T5 RECHARGE', '0', '2022', '366990', 'AUTOMÁTICO', 'VERDE', 'São Paulo - SP', 'Shopping', 'https://production.autoforce.com/uploads/version/profile_image/4480/comprar-inscription-t4_43bdb2e04e.png'),
                ('S10', 'CHEVROLET', 'S10', '2.5 LT 4X2 16V', '24324', '2018', '134900', 'MANUAL', 'PRETO', 'São Paulo - SP', 'Shopping', 'https://jorlan.com/bh/uploads/products/versions/colors/chevrolet-s10-ltz-preto-ouro-negro-9.png'),
                ('Q3', 'AUDI', 'Q3', '1.4 TFSI FLEX', '28461', '2018', '169900', 'AUTOMÁTICO', 'LARANJA', 'São Paulo - SP', 'Shopping', 'https://production.autoforce.com/uploads/version/profile_image/5443/comprar-prestige-35-tfsi-s-tronic_474e06aa01.png')
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM "car" WHERE id = (SELECT id FROM "car" WHERE km = '101354'),
      DELETE FROM "car" WHERE id = (SELECT id FROM "car" WHERE km = '57500'),
      DELETE FROM "car" WHERE id = (SELECT id FROM "car" WHERE km = '101354'),
      DELETE FROM "car" WHERE id = (SELECT id FROM "car" WHERE km = '42300'),
      DELETE FROM "car" WHERE id = (SELECT id FROM "car" WHERE km = '68000'),
      DELETE FROM "car" WHERE id = (SELECT id FROM "car" WHERE km = '479990'),
      DELETE FROM "car" WHERE id = (SELECT id FROM "car" WHERE km = '46000'),
      DELETE FROM "car" WHERE id = (SELECT id FROM "car" WHERE km = '0'),
      DELETE FROM "car" WHERE id = (SELECT id FROM "car" WHERE km = '24324'),
      DELETE FROM "car" WHERE id = (SELECT id FROM "car" WHERE km = '28461')
      `,
    );
  }
}
