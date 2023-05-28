
import { IsNotEmpty, IsDate, IsEnum, IsString, IsInt } from 'class-validator';
import { Trim } from 'class-sanitizer';
import { Transform } from 'class-transformer';
import { ExerciseType } from "@prisma/client"


export class ExerciseRecordRequestDto {
    
    @IsNotEmpty()
    @Trim()
    public name: string;

    @IsEnum(ExerciseType)
    public type: ExerciseType;

    @IsNotEmpty()
    @IsString()
    @Trim()
    public activity: string;

    @IsNotEmpty()
    @IsInt()
    public duration: number;

    @Transform((params) => new Date(params.value))
    @IsNotEmpty()
    @IsDate({ message: "Invalid date" })
    public date: Date;

}