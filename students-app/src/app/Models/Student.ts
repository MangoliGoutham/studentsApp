export interface Student {
    id: number;
    Name: string;
    Class: string;
   Gender: 'Male' | 'Female' | 'Other'| string; 
    Hobby: string;
    FavouriteSubject: string;
}
export class StudentClass implements Student {
    constructor(
        public id: number,
        public Name: string,
        public Class: string,
         public Gender: string,
        public Hobby: string,
        public FavouriteSubject: string
    ) {}

}