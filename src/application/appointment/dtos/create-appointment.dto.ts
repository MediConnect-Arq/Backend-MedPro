
export class CreateAppointmentDto{
    duration: Date;
    location: string;
    notes?: string;
    patient_id: number;
    schedule_id: number;
    appointment_status_id: number;
}