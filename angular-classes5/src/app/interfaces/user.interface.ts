export interface IUser{
    id: number;
    name: string;
    email: string;
    password: string;
    job: string;
}

export type TRegisterUserData = Omit<IUser, "id">;

export type TLoginUserData = Pick<IUser, "email" | "password">;

export type TUserReturn = Omit<IUser, "password">;

export interface ILoginUserReturn{
    accessToken: string;
    user: TUserReturn;
}