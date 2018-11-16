export class Activity {
    constructor(
        public name?: string,
        public duration?: string,
        public activity_date?: Date,
        public place?: string,
        public saloon?: string,
        public entry?: number,
        public requirements?: string,
        public id?: number,
        public id_event?: number
    ){}
}