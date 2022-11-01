import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1666709317514 implements MigrationInterface {
    name = 'createTables1666709317514'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "property" DROP CONSTRAINT "FK_6f1540725212f0c728e9aea0b23"`);
        await queryRunner.query(`ALTER TABLE "property" RENAME COLUMN "categoryId" TO "categoriesId"`);
        await queryRunner.query(`ALTER TABLE "property" ADD CONSTRAINT "FK_6b97f74620d19273bcbea36b516" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "property" DROP CONSTRAINT "FK_6b97f74620d19273bcbea36b516"`);
        await queryRunner.query(`ALTER TABLE "property" RENAME COLUMN "categoriesId" TO "categoryId"`);
        await queryRunner.query(`ALTER TABLE "property" ADD CONSTRAINT "FK_6f1540725212f0c728e9aea0b23" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
