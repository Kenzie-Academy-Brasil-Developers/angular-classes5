export interface IPost{
    id: number;
    category: string;
    title: string;
    content: string;
    author: string;
}

export type TCreatePostData = Omit<IPost, "id">;

export type TUpdatePostData = Partial<Omit<IPost, "id" | "author">>;