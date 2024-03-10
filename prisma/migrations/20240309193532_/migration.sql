/*
  Warnings:

  - You are about to drop the `Login` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Login";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Informations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
