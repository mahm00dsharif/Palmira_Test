export interface AuthResponseDto {
    code: number;
    message: string;
    data: authData;
}

export interface authData {
    userID:number,
    email:string,
    accessToken:string
}