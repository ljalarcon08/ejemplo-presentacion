import { Routes } from '@angular/router';
import { ExpComponent } from './components/exp/exp.component';
import { TechComponent } from './components/tech/tech.component';
import { DemosComponent } from './components/demos/demos.component';
import { EducacionComponent } from './components/educacion/educacion.component';

export const routes: Routes = [
    {path:'exp',component:ExpComponent},
    {path:'tech',component:TechComponent},
    {path:'demos',component:DemosComponent},
    {path:'educacion',component:EducacionComponent},
    {path:'**',component:ExpComponent}
];

