-- CreateTable
CREATE TABLE "Tasks" (
    "id" BIGSERIAL NOT NULL,
    "taskTitle" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);
