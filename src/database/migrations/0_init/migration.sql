-- CreateTable
CREATE TABLE "monsters" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "size_id" INTEGER NOT NULL,
    "type_id" INTEGER NOT NULL,
    "alignment" TEXT NOT NULL,
    "armor_class" INTEGER NOT NULL,
    "armor_desc" TEXT NOT NULL,
    "challenge_rating" DOUBLE PRECISION NOT NULL,
    "hit_points" INTEGER NOT NULL,
    "hit_dice" TEXT NOT NULL,

    CONSTRAINT "monsters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sizes" (
    "id" INTEGER NOT NULL,
    "size" TEXT NOT NULL,

    CONSTRAINT "sizes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "types" (
    "id" INTEGER NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "types_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "monsters" ADD CONSTRAINT "monsters_size_id_fkey" FOREIGN KEY ("size_id") REFERENCES "sizes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "monsters" ADD CONSTRAINT "monsters_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

