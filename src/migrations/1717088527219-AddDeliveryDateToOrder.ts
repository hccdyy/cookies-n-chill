import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDeliveryDateToOrder1717088527219 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {{
        await queryRunner.query(
            'ALTER TABLE "order" ADD COLUMN "deliveryDate" date'
        );
    }}

    public async down(queryRunner: QueryRunner): Promise<void> {{
        await queryRunner.query(
            'ALTER TABLE "order" DROP COLUMN "deliveryDate"'
        );
    }}
}
