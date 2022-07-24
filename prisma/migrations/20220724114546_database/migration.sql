-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teacher" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "term" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,

    CONSTRAINT "term_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "discipline" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "term_id" TEXT NOT NULL,

    CONSTRAINT "discipline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teacher_discipline" (
    "id" TEXT NOT NULL,
    "teacher_id" TEXT NOT NULL,
    "discipline_id" TEXT NOT NULL,

    CONSTRAINT "teacher_discipline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "test" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "uri" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "teacher_discipline_id" TEXT NOT NULL,

    CONSTRAINT "test_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "term_number_key" ON "term"("number");

-- AddForeignKey
ALTER TABLE "discipline" ADD CONSTRAINT "discipline_term_id_fkey" FOREIGN KEY ("term_id") REFERENCES "term"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teacher_discipline" ADD CONSTRAINT "teacher_discipline_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teacher_discipline" ADD CONSTRAINT "teacher_discipline_discipline_id_fkey" FOREIGN KEY ("discipline_id") REFERENCES "discipline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test" ADD CONSTRAINT "test_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test" ADD CONSTRAINT "test_teacher_discipline_id_fkey" FOREIGN KEY ("teacher_discipline_id") REFERENCES "teacher_discipline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
