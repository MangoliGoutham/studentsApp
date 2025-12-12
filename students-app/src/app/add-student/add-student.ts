
import { Component } from '@angular/core';
import { StudentsService } from '../Services/students-service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Student, StudentClass } from '../Models/Student';

@Component({
  standalone: true,
  selector: 'app-add-student',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-student.html',
  styleUrls: ['./add-student.css'],
})
export class AddStudent {

  name = '';
  className = ''; 
  gender = ''; 
  hasHobby = false;
  hobby = '';
  favoriteSubject = '';

  classes = ['Class 6', 'Class 7', 'Class 8', 'Class 9'];
  subjects = ['Math', 'Science', 'English', 'Data Structures', 'History'];

  submitting = false;

  constructor(private studentService: StudentsService, private router: Router) {}

  onHasHobbyChange() {
    if (!this.hasHobby) {
      this.hobby = '';
    }
  }

  private normalizeClassValue(raw: string): string {
    if (!raw) return '';
    return raw.startsWith('Class ') ? raw.replace('Class ', '').trim() : raw.trim();
  }

  private normalizeGender(raw: string): string {
    if (!raw) return '';
    return raw.charAt(0).toUpperCase() + raw.slice(1).toLowerCase();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.submitting = true;

    const classVal = this.normalizeClassValue(this.className);
    const genderVal = this.normalizeGender(this.gender);
    const hobbyVal = this.hasHobby ? (this.hobby || 'No hobby') : 'No hobby';

    
    const student: Student = new StudentClass(
      Date.now(),                
      this.name || '',
      classVal || '',
      (genderVal as any) || '',
      hobbyVal,
      this.favoriteSubject || ''
    );

    this.studentService.addStudent(student);

    this.submitting = false;
    form.resetForm();
    this.router.navigate(['/students']);
  }

  onCancel() {
    this.router.navigate(['/students']);
  }
}
