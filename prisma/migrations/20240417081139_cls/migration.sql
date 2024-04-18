/*
  Warnings:

  - The primary key for the `TaskList` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Tasks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `taskId` on the `Tasks` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TaskList" DROP CONSTRAINT "TaskList_taskListId_fkey";

-- AlterTable
ALTER TABLE "TaskList" DROP CONSTRAINT "TaskList_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "taskListId" DROP DEFAULT,
ADD CONSTRAINT "TaskList_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "TaskList_taskListId_seq";

-- AlterTable
ALTER TABLE "Tasks" DROP CONSTRAINT "Tasks_pkey",
DROP COLUMN "taskId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "TaskList" ADD CONSTRAINT "TaskList_taskListId_fkey" FOREIGN KEY ("taskListId") REFERENCES "Tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
