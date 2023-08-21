/*
  Warnings:

  - You are about to drop the column `range` on the `senses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "monster_senses" ADD COLUMN     "range" TEXT;

-- AlterTable
ALTER TABLE "senses" DROP COLUMN "range";
