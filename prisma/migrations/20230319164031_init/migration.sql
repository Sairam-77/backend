-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "trailer" TEXT NOT NULL,
    "language" TEXT[],
    "releaseDate" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "cast" TEXT[],
    "crew" TEXT[],
    "poster" TEXT NOT NULL,
    "categories" TEXT[],
    "duration" TEXT NOT NULL,
    "like" TEXT NOT NULL,
    "seats" JSONB
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Movie_id_key" ON "Movie"("id");
