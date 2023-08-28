/*
  Warnings:

  - A unique constraint covering the columns `[monster_id]` on the table `attributes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "attributes_monster_id_key" ON "attributes"("monster_id");
