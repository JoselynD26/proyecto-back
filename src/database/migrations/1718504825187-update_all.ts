import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateAll1718504825187 implements MigrationInterface {
    name = 'UpdateAll1718504825187'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categoria" ("id_categoria" SERIAL NOT NULL, "nombre" character varying NOT NULL, "descripcion" text NOT NULL, CONSTRAINT "PK_950063d23664f5aaec4dcada4d4" PRIMARY KEY ("id_categoria"))`);
        await queryRunner.query(`CREATE TABLE "item_menu" ("id_item" SERIAL NOT NULL, "nombre" character varying NOT NULL, "descripcion" text NOT NULL, "precio" numeric(10,2) NOT NULL, "categoriaIdCategoria" integer, CONSTRAINT "PK_88b6ed05bd57e57492cfd621b1d" PRIMARY KEY ("id_item"))`);
        await queryRunner.query(`CREATE TABLE "orden" ("id_orden" SERIAL NOT NULL, "id_item" integer NOT NULL, "cantidad" integer NOT NULL, CONSTRAINT "PK_9a36b768b8ceb183e5a59c628c7" PRIMARY KEY ("id_orden"))`);
        await queryRunner.query(`CREATE TABLE "comprobante" ("id_comprobante" SERIAL NOT NULL, "id_orden" integer NOT NULL, "numero_comprobante" integer NOT NULL, "total" numeric(10,2) NOT NULL, "fecha" TIMESTAMP NOT NULL, CONSTRAINT "PK_07d9213f9df7f7558e35c8fb6ac" PRIMARY KEY ("id_comprobante"))`);
        await queryRunner.query(`CREATE TABLE "carrito" ("id_carrito" SERIAL NOT NULL, "id_item" integer NOT NULL, "cantidad" integer NOT NULL, CONSTRAINT "PK_91ab6e26cf34c79ef9e27f69863" PRIMARY KEY ("id_carrito"))`);
        await queryRunner.query(`ALTER TABLE "item_menu" ADD CONSTRAINT "FK_432c86c5eca11673655e1ff39cd" FOREIGN KEY ("categoriaIdCategoria") REFERENCES "categoria"("id_categoria") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orden" ADD CONSTRAINT "FK_c453ca78892facae72ad7e99627" FOREIGN KEY ("id_item") REFERENCES "item_menu"("id_item") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comprobante" ADD CONSTRAINT "FK_d3e04cccc6637ae538c0fb59f11" FOREIGN KEY ("id_orden") REFERENCES "orden"("id_orden") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "carrito" ADD CONSTRAINT "FK_0c9d53df0e34ad91df9dd28a846" FOREIGN KEY ("id_item") REFERENCES "item_menu"("id_item") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "carrito" DROP CONSTRAINT "FK_0c9d53df0e34ad91df9dd28a846"`);
        await queryRunner.query(`ALTER TABLE "comprobante" DROP CONSTRAINT "FK_d3e04cccc6637ae538c0fb59f11"`);
        await queryRunner.query(`ALTER TABLE "orden" DROP CONSTRAINT "FK_c453ca78892facae72ad7e99627"`);
        await queryRunner.query(`ALTER TABLE "item_menu" DROP CONSTRAINT "FK_432c86c5eca11673655e1ff39cd"`);
        await queryRunner.query(`DROP TABLE "carrito"`);
        await queryRunner.query(`DROP TABLE "comprobante"`);
        await queryRunner.query(`DROP TABLE "orden"`);
        await queryRunner.query(`DROP TABLE "item_menu"`);
        await queryRunner.query(`DROP TABLE "categoria"`);
    }

}
