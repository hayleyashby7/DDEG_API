-- CreateTable
CREATE TABLE "monsters_senses" (
    "sense_id" INTEGER NOT NULL,
    "monster_id" INTEGER NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "monster_sense" PRIMARY KEY ("sense_id","monster_id")
);

-- CreateTable
CREATE TABLE "senses" (
    "id" INTEGER NOT NULL,
    "sense" TEXT NOT NULL,

    CONSTRAINT "senses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "monster_stats" (
    "stat_id" INTEGER NOT NULL,
    "monster_id" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "modifier" INTEGER NOT NULL,
    "saving_throw" INTEGER,

    CONSTRAINT "monster_stats_pkey" PRIMARY KEY ("stat_id","monster_id")
);

-- CreateTable
CREATE TABLE "stats" (
    "id" SERIAL NOT NULL,
    "stat" TEXT NOT NULL,

    CONSTRAINT "stats_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "monsters_senses" ADD CONSTRAINT "monster_id" FOREIGN KEY ("monster_id") REFERENCES "monsters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "monsters_senses" ADD CONSTRAINT "sense_id" FOREIGN KEY ("sense_id") REFERENCES "senses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "monster_stats" ADD CONSTRAINT "monster_stats_monster_id_fkey" FOREIGN KEY ("monster_id") REFERENCES "monsters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "monster_stats" ADD CONSTRAINT "monster_stats_stat_id_fkey" FOREIGN KEY ("stat_id") REFERENCES "stats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
