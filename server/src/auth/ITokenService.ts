export interface ITokenPayload {
    // id: string;
    username: string;
    password: string;
}

export interface ITokenService {
    createToken: ({ username, password }: ITokenPayload) => Promise<string>;
}
