export interface subordinatesResponseDto {
    code: number;
    message: string;
    data: subordinatesData[];
}

export interface subordinatesData {
    ID:number,
    name:string,
    responsibleName:string,
    responsibleImage:string,
    subordinates:number
}