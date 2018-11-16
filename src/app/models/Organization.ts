export class Organization {
    constructor(
        public name?: string,
        public country?: string,
        public phone?: string,
        public website?:string,
        public email?: string,
        public description?: string,
        public year?: number,
        public startDate?: Date,
        public finishDate?: Date,
        public id?: number
    ){}
}