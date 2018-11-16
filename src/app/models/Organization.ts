export class Organization {
    constructor(
        public name?: string,
        public country?: string,
        public phone?: string,
        public website?:string,
        public email?: string,
        public description?: string,
        public year?: number,
        public start_date?: Date,
        public finish_date?: Date,
        public id?: number
    ){}
}