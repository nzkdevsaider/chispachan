-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Thread" (
    "threadId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "boardBoardId" TEXT,

    CONSTRAINT "Thread_pkey" PRIMARY KEY ("threadId")
);

-- CreateTable
CREATE TABLE "ThreadReply" (
    "replyId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "threadId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ThreadReply_pkey" PRIMARY KEY ("replyId")
);

-- CreateTable
CREATE TABLE "Board" (
    "boardId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Board_pkey" PRIMARY KEY ("boardId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_ip_key" ON "User"("ip");

-- CreateIndex
CREATE UNIQUE INDEX "Board_name_key" ON "Board"("name");

-- AddForeignKey
ALTER TABLE "Thread" ADD CONSTRAINT "Thread_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Thread" ADD CONSTRAINT "Thread_boardBoardId_fkey" FOREIGN KEY ("boardBoardId") REFERENCES "Board"("boardId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ThreadReply" ADD CONSTRAINT "ThreadReply_threadId_fkey" FOREIGN KEY ("threadId") REFERENCES "Thread"("threadId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ThreadReply" ADD CONSTRAINT "ThreadReply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
