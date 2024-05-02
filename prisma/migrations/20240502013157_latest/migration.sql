/*
  Warnings:

  - A unique constraint covering the columns `[userName]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `subDescription` to the `TaskList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subName` to the `TaskList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TaskList" ADD COLUMN     "isFinished" BOOLEAN,
ADD COLUMN     "subDescription" TEXT NOT NULL,
ADD COLUMN     "subName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tasks" ALTER COLUMN "isFinished" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Users_userName_key" ON "Users"("userName");
