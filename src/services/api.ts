import type { Thread } from "@/types";

export async function fetchThreads(boardName: string): Promise<Thread[]> {
	const response = await fetch(
		`${process.env.API_URL}/api/${boardName}/threads`,
	);
	if (!response.ok) throw new Error("Ocurrio un error al obtener los posts");
	return response.json();
}

export async function createPost(
	boardName: string,
	postData: FormData,
): Promise<Thread> {
	const response = await fetch(
		`${process.env.API_URL}/api/${boardName}/posts`,
		{
			method: "POST",
			body: postData,
		},
	);
	if (!response.ok) throw new Error("Ocurrio un error al crear el post");
	return response.json();
}
