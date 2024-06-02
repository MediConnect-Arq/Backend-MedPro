export class Appointment{
    id: number;
    duration: number;
    location: string;
    notes?: string;
    patient_id: number;
    schedule_id: number;
    created_at: Date;
    updated_at?: Date;
}