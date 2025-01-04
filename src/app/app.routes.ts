import { Routes } from '@angular/router';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { NgIfAndNgForComponent } from './Components/structural-directive/ng-if-and-ng-for/ng-if-and-ng-for.component';

export const routes: Routes = [
    {
        path:"data-binding",
        component:DataBindingComponent
    },
    {
        path:"structural-directive",
        component:NgIfAndNgForComponent
    },
];
