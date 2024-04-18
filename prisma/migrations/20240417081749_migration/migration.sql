/*
  Warnings:

  - You are about to drop the column `taskListId` on the `TaskList` table. All the data in the column will be lost.
  - The primary key for the `Tasks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Tasks` table. All the data in the column will be lost.
  - Added the required column `taskId` to the `TaskList` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TaskList" DROP CONSTRAINT "TaskList_taskListId_fkey";

-- AlterTable
ALTER TABLE "TaskList" DROP COLUMN "taskListId",
ADD COLUMN     "taskId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Tasks" DROP CONSTRAINT "Tasks_pkey",
DROP COLUMN "id",
ADD COLUMN     "taskId" SERIAL NOT NULL,
ADD CONSTRAINT "Tasks_pkey" PRIMARY KEY ("taskId");

-- AddForeignKey
ALTER TABLE "TaskList" ADD CONSTRAINT "TaskList_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Tasks"("taskId") ON DELETE CASCADE ON UPDATE CASCADE;
