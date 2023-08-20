/*
  Warnings:

  - You are about to drop the column `range` on the `languages` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "languages" DROP COLUMN "range";

-- AlterTable
ALTER TABLE "monster_languages" ADD COLUMN     "range" TEXT;
