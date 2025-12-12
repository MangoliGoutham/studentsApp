import { Injectable } from '@angular/core';
import { StudentClass } from '../Models/Student';


@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private studentsList: StudentClass[] = [
    new StudentClass(1, 'Goutham', 'Class 9', 'Male', 'Reading', 'Math'),
  ];

  getStudents(): StudentClass[] {
    return this.studentsList;
  }

  addStudent(st: any){
    const nextid = this.studentsList.length > 0 ? Math.max(...this.studentsList.map(s => s.id)) + 1 : 1;
    const newStudent = new StudentClass(
      nextid,
      st.Name,
      st.Class,
      st.Gender,    
      st.Hobby,
      st.FavouriteSubject
    );
    this.studentsList.push(newStudent);
  }
  
}
