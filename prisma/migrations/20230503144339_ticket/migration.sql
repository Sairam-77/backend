-- CreateTable
CREATE TABLE "Ticket" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "showTime" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "seats" TEXT[],
    "screen" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_id_key" ON "Ticket"("id");
