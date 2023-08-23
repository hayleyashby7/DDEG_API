/*
  Warnings:

  - You are about to drop the column `attack_bonus` on the `actions` table. All the data in the column will be lost.
  - You are about to drop the column `damage_bonus` on the `actions` table. All the data in the column will be lost.
  - You are about to drop the column `damage_dice` on the `actions` table. All the data in the column will be lost.
  - You are about to drop the column `desc` on the `actions` table. All the data in the column will be lost.
  - You are about to drop the column `legendary` on the `actions` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `actions` table. All the data in the column will be lost.
  - You are about to drop the column `reaction` on the `actions` table. All the data in the column will be lost.
  - Added the required column `actions` to the `actions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `legendary_actions` to the `actions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reactions` to the `actions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "actions" DROP COLUMN "attack_bonus",
DROP COLUMN "damage_bonus",
DROP COLUMN "damage_dice",
DROP COLUMN "desc",
DROP COLUMN "legendary",
DROP COLUMN "name",
DROP COLUMN "reaction",
ADD COLUMN     "actions" TEXT NOT NULL,
ADD COLUMN     "legendary_actions" TEXT NOT NULL,
ADD COLUMN     "reactions" TEXT NOT NULL;
