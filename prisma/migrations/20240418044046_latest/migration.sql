/*
  Warnings:

  - Added the required column `userId` to the `Tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tasks" ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Users" (
    "userId" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("userId")
);

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
