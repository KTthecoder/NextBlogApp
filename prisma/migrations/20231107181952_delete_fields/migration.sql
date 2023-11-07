/*
  Warnings:

  - You are about to drop the column `banner` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `disslikes` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `icon` on the `ArticleCategory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Article" DROP COLUMN "banner",
DROP COLUMN "disslikes";

-- AlterTable
ALTER TABLE "ArticleCategory" DROP COLUMN "icon";
