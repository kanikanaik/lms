/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "Users" (
    "id" STRING NOT NULL,
    "firstname" STRING,
    "lastname" STRING,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);
