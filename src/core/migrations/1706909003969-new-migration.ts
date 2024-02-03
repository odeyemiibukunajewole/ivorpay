import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1706909003969 implements MigrationInterface {
    name = 'NewMigration1706909003969'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "restaurant" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "address" character varying NOT NULL, "latitude" numeric(10,8) NOT NULL, "longitude" numeric(11,8) NOT NULL, "location" geometry(Point) NOT NULL, CONSTRAINT "PK_649e250d8b8165cb406d99aa30f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a4e247203bbc0618c88786121c" ON "restaurant" ("location") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_a4e247203bbc0618c88786121c"`);
        await queryRunner.query(`DROP TABLE "restaurant"`);
    }

}
