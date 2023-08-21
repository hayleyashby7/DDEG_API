/*
  Warnings:

  - You are about to drop the column `name` on the `speeds` table. All the data in the column will be lost.
  - Added the required column `speed` to the `speeds` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "speeds" DROP COLUMN "name",
ADD COLUMN     "speed" TEXT NOT NULL;
