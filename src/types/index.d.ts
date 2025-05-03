export interface Thread {
    id: string; // uuid
    title: string;
    content: string;
    attachmentsUrls: string[];
    createdAt: string; // ISO 8601 format
    deletedAt: string | null; // ISO 8601 format or null
    replies: ThreadReply[];
}

export interface ThreadReply {
    id: string; // uuid
    content: string;
    attachmentsUrls: string[];
    createdAt: string; // ISO 8601 format
    deletedAt: string | null; // ISO 8601 format or null
}

export interface Board {
    id: string; // uuid
    name: string;
    description: string;
    createdAt: string; // ISO 8601 format
    deletedAt: string | null; // ISO 8601 format or null
    threads: Thread[];
}