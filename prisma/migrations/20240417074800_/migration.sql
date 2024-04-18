/*
  Warnings:

  - The primary key for the `Tasks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Tasks` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tasks" DROP CONSTRAINT "Tasks_pkey",
DROP COLUMN "id",
ADD COLUMN     "taskId" SERIAL NOT NULL,
ADD CONSTRAINT "Tasks_pkey" PRIMARY KEY ("taskId");

-- CreateTable
CREATE TABLE "TaskList" (
    "taskListId" SERIAL NOT NULL,

    CONSTRAINT "TaskList_pkey" PRIMARY KEY ("taskListId")
);

-- AddForeignKey
ALTER TABLE "TaskList" ADD CONSTRAINT "TaskList_taskListId_fkey" FOREIGN KEY ("taskListId") REFERENCES "Tasks"("taskId") ON DELETE RESTRICT ON UPDATE CASCADE;
