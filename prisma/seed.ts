import { PrismaClient, type Prisma } from "../prisma-client";

const prisma = new PrismaClient();

const boards: Prisma.BoardCreateInput[] = [
	{
		name: "General",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		name: "Programamonos",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		name: "Anime y manga",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		name: "Deportes",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		name: "Politica",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
];

export async function main() {
	await prisma.board.createMany({
		data: boards,
	});
	console.log("Seeded boards");
}

main();
