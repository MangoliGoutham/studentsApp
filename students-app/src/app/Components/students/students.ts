import { Component } from '@angular/core';
import { StudentsService } from '../../Services/students-service';
import { Student } from '../../Models/Student';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-students',
  imports: [CommonModule, RouterLink],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {
  SList: Student[] = [];
  constructor(private studentService: StudentsService) {
    this.SList = this.studentService.getStudents();
  }

}
