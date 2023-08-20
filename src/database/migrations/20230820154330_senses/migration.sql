/*
  Warnings:

  - You are about to drop the `monsters_senses` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "monsters_senses" DROP CONSTRAINT "monster_id";

-- DropForeignKey
ALTER TABLE "monsters_senses" DROP CONSTRAINT "sense_id";

-- AlterTable
ALTER TABLE "monster_languages" ADD COLUMN     "misc" TEXT;

-- DropTable
DROP TABLE "monsters_senses";

-- CreateTable
CREATE TABLE "monster_senses" (
    "sense_id" INTEGER NOT NULL,
    "monster_id" INTEGER NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "monster_sense" PRIMARY KEY ("sense_id","monster_id")
);

-- AddForeignKey
ALTER TABLE "monster_senses" ADD CONSTRAINT "monster_id" FOREIGN KEY ("monster_id") REFERENCES "monsters"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "monster_senses" ADD CONSTRAINT "sense_id" FOREIGN KEY ("sense_id") REFERENCES "senses"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
