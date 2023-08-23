-- CreateTable
CREATE TABLE "traits" (
    "id" SERIAL NOT NULL,
    "monster_id" INTEGER NOT NULL,
    "traits" TEXT NOT NULL,

    CONSTRAINT "traits_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "traits" ADD CONSTRAINT "traits_monster_id_fkey" FOREIGN KEY ("monster_id") REFERENCES "monsters"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
