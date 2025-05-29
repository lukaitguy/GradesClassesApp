import { Routes } from '@angular/router';
import { GradesComponentComponent } from './components/grades-component/grades-component.component';
import { HomeGradesComponent } from './components/home-grades/home-grades.component';
import { ClassesFormComponent } from './components/classes-form/classes-form.component';
import { ShowClassesComponent } from './components/show-classes/show-classes.component';

export const routes: Routes = [
    {path: '',  component: HomeGradesComponent},
    {path: 'grades/create', component: GradesComponentComponent},
    {path: 'classes', component: ShowClassesComponent},
    {
        path: 'classes/create',
        component: ClassesFormComponent,
        // canActivate: [FormDataGuard]
    }, 
];
