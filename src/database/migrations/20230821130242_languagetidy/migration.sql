/*
  Warnings:

  - You are about to drop the column `misc` on the `monster_languages` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "monster_senses" DROP CONSTRAINT "monster_id";

-- DropForeignKey
ALTER TABLE "monster_senses" DROP CONSTRAINT "sense_id";

-- AlterTable
ALTER TABLE "monster_languages" DROP COLUMN "misc";

-- AddForeignKey
ALTER TABLE "monster_senses" ADD CONSTRAINT "monster_id" FOREIGN KEY ("monster_id") REFERENCES "monsters"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "monster_senses" ADD CONSTRAINT "sense_id" FOREIGN KEY ("sense_id") REFERENCES "senses"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;
