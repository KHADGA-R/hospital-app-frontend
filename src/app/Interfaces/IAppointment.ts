export interface IAppointment {
    appointmentId : number;
    patient : number;
    appointmentTime : number;
    hospitalName : string;
    hospitalAddress : string;
    appointmentStatus : string;
    hospitalRating? : number;
}