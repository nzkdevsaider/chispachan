"use server";

import Link from "next/link";
import prisma from "@/services/prisma";

const BoardsList = async () => {
	const boards = await prisma.board.findMany();
	return (
		<div>
			<ul>
				{boards.map((board) => (
					<li key={board.boardId}>
						<Link href={`/board/${board.boardId}`}>{board.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default BoardsList;
