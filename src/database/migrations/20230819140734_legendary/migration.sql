/*
  Warnings:

  - You are about to drop the `legendary_actions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "actions" DROP CONSTRAINT "actions_id_fkey";

-- DropForeignKey
ALTER TABLE "legendary_actions" DROP CONSTRAINT "legendary_actions_monster_id_fkey";

-- DropTable
DROP TABLE "legendary_actions";
