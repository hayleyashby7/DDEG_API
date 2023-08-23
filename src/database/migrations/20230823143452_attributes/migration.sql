-- CreateTable
CREATE TABLE "attributes" (
    "id" SERIAL NOT NULL,
    "monster_id" INTEGER NOT NULL,
    "damage_immunities" TEXT,
    "condition_immunities" TEXT,
    "damage_resistances" TEXT,
    "damage_vulnerabilities" TEXT,

    CONSTRAINT "attributes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "attributes" ADD CONSTRAINT "attributes_monster_id_fkey" FOREIGN KEY ("monster_id") REFERENCES "monsters"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
