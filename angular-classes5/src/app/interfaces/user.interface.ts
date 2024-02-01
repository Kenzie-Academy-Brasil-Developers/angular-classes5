export interface IUser{
    id: number;
    name: string;
    email: string;
    password: string;
    job: string;
}

export interface IUserData{
    name: string | null;
    email: string | null;
    password: string | null;
    job: string | null;
}

export type TRegisterUserData = Omit<IUserData, "id">;

export type TLoginUserData = Pick<IUserData, "email" | "password">;

export type TUserReturn = Omit<IUser, "password">;

export interface IRegisterUserReturn{
    accessToken: string;
    user: TUserReturn;
}

export interface ILoginUserReturn{
    accessToken: string;
    user: TUserReturn;
}