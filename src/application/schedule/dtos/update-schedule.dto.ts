import { Matches } from "class-validator";

export class UpdateScheduleDto {
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'date must be in the format YYYY-MM-DD' })
    date?: Date;
    @Matches(/^\d{2}:\d{2}:\d{2}$/, { message: 'time must be in the format HH:MM:SS' })
    time?: Date;
    specialty_id?: number;
}