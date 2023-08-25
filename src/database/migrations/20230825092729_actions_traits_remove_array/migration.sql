/*
  Warnings:

  - A unique constraint covering the columns `[monster_id]` on the table `actions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[monster_id]` on the table `traits` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "actions_monster_id_key" ON "actions"("monster_id");

-- CreateIndex
CREATE UNIQUE INDEX "traits_monster_id_key" ON "traits"("monster_id");
