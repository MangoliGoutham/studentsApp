import { Routes } from '@angular/router';
import { Students } from './Components/students/students';
import { AddStudent } from './add-student/add-student';


export const routes: Routes = [
    { path: '', redirectTo: '/students', pathMatch: 'full' },
    { path: 'students', component: Students },
    { path: 'add-student', component: AddStudent }
];