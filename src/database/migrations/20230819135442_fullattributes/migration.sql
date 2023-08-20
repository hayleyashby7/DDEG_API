-- DropForeignKey
ALTER TABLE "monster_stats" DROP CONSTRAINT "monster_stats_monster_id_fkey";

-- DropForeignKey
ALTER TABLE "monster_stats" DROP CONSTRAINT "monster_stats_stat_id_fkey";

-- DropForeignKey
ALTER TABLE "monsters" DROP CONSTRAINT "monsters_size_id_fkey";

-- DropForeignKey
ALTER TABLE "monsters" DROP CONSTRAINT "monsters_type_id_fkey";

-- DropForeignKey
ALTER TABLE "monsters_senses" DROP CONSTRAINT "monster_id";

-- DropForeignKey
ALTER TABLE "monsters_senses" DROP CONSTRAINT "sense_id";

-- CreateTable
CREATE TABLE "actions" (
    "id" SERIAL NOT NULL,
    "monster_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "attack_bonus" INTEGER,
    "damage_dice" TEXT,
    "damage_bonus" INTEGER,
    "legendary" BOOLEAN,

    CONSTRAINT "actions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "legendary_actions" (
    "id" SERIAL NOT NULL,
    "monster_id" INTEGER NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "legendary_actions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "monster_languages" (
    "monster_id" INTEGER NOT NULL,
    "language_id" INTEGER NOT NULL,

    CONSTRAINT "monster_languages_pkey" PRIMARY KEY ("monster_id","language_id")
);

-- CreateTable
CREATE TABLE "languages" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "monster_skills" (
    "monster_id" INTEGER NOT NULL,
    "skill_id" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "monster_skills_pkey" PRIMARY KEY ("monster_id","skill_id")
);

-- CreateTable
CREATE TABLE "skills" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "monster_speeds" (
    "monster_id" INTEGER NOT NULL,
    "speed_id" INTEGER NOT NULL,
    "range" INTEGER NOT NULL,

    CONSTRAINT "monster_speeds_pkey" PRIMARY KEY ("monster_id","speed_id")
);

-- CreateTable
CREATE TABLE "speeds" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "speeds_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "monsters" ADD CONSTRAINT "monsters_size_id_fkey" FOREIGN KEY ("size_id") REFERENCES "sizes"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "monsters" ADD CONSTRAINT "monsters_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "types"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "actions" ADD CONSTRAINT "actions_monster_id_fkey" FOREIGN KEY ("monster_id") REFERENCES "monsters"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "actions" ADD CONSTRAINT "actions_id_fkey" FOREIGN KEY ("id") REFERENCES "legendary_actions"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "legendary_actions" ADD CONSTRAINT "legendary_actions_monster_id_fkey" FOREIGN KEY ("monster_id") REFERENCES "monsters"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "monsters_senses" ADD CONSTRAINT "monster_id" FOREIGN KEY ("monster_id") REFERENCES "monsters"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "monsters_senses" ADD CONSTRAINT "sense_id" FOREIGN KEY ("sense_id") REFERENCES "senses"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "monster_stats" ADD CONSTRAINT "monster_stats_monster_id_fkey" FOREIGN KEY ("monster_id") REFERENCES "monsters"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "monster_stats" ADD CONSTRAINT "monster_stats_stat_id_fkey" FOREIGN KEY ("stat_id") REFERENCES "stats"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "monster_languages" ADD CONSTRAINT "monster_languages_monster_id_fkey" FOREIGN KEY ("monster_id") REFERENCES "monsters"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "monster_languages" ADD CONSTRAINT "monster_languages_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "monster_skills" ADD CONSTRAINT "monster_skills_monster_id_fkey" FOREIGN KEY ("monster_id") REFERENCES "monsters"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "monster_skills" ADD CONSTRAINT "monster_skills_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skills"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "monster_speeds" ADD CONSTRAINT "monster_speeds_monster_id_fkey" FOREIGN KEY ("monster_id") REFERENCES "monsters"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "monster_speeds" ADD CONSTRAINT "monster_speeds_speed_id_fkey" FOREIGN KEY ("speed_id") REFERENCES "speeds"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
