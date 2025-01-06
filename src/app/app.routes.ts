import { Routes } from '@angular/router';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { NgIfAndNgForComponent } from './Components/structural-directive/ng-if-and-ng-for/ng-if-and-ng-for.component';
import { NgClassAndNgStyleComponent } from './Components/attribute-directive/ng-class-and-ng-style/ng-class-and-ng-style.component';
import { ForSwitchComponent } from './Components/control-flow/for-switch/for-switch.component';
import { IfElseComponent } from './Components/control-flow/if-else/if-else.component';
import { SignalComponent } from './Components/signal/signal.component';
import { LinkedSignalComponent } from './Components/linked-signal/linked-signal.component';
import { TemplateFormValiadationComponent } from './Components/Forms/template-form-valiadation/template-form-valiadation.component';
import { ReactiveFormValiadationComponent } from './Components/Forms/reactive-form-valiadation/reactive-form-valiadation.component';
import { GetApiComponent } from './Components/API/get-api/get-api.component';
import { PostApiComponent } from './Components/API/post-api/post-api.component';
import { PutApiComponent } from './Components/API/put-api/put-api.component';
import { DeleteApiComponent } from './Components/API/delete-api/delete-api.component';
import { ResourceApiComponent } from './Components/resource-api/resource-api.component';
import { CrudApiServiceComponent } from './Components/crud-api-service/crud-api-service.component';
import { LifeCycleEventsComponent } from './Components/life-cycle-events/life-cycle-events.component';
import { PipesComponent } from './Components/pipes/pipes.component';

export const routes: Routes = [
    { path: '', redirectTo: '/data-binding', pathMatch: 'full' },
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path: 'structural-directive',
    component: NgIfAndNgForComponent,
  },
  {
    path: 'attribute-directive',
    component: NgClassAndNgStyleComponent,
  },
  {
    path: 'for-switch',
    component: ForSwitchComponent,
  },
  {
    path: 'if-else',
    component: IfElseComponent,
  },
  {
    path: 'signal',
    component:SignalComponent,
  },
  {
    path: 'linked-signal',
    component:LinkedSignalComponent,
  },
  {
    path: 'template-form',
    component:TemplateFormValiadationComponent,
  },
  {
    path: 'reactive-form',
    component:ReactiveFormValiadationComponent,
  },
  {
    path: 'get-api',
    component:GetApiComponent,
  },
  {
    path: 'post-api',
    component:PostApiComponent,
  },
  {
    path: 'put-api',
    component:PutApiComponent,
  },
  {
    path: 'delete-api',
    component:DeleteApiComponent,
  },
  {
    path: 'resource-api',
    component:ResourceApiComponent,
  },
  {
    path: 'crud-api-service',
    component:CrudApiServiceComponent,
  },
  {
    path: 'lifeCycle-events',
    component:LifeCycleEventsComponent,
  },
  {
    path: 'pipes',
    component:PipesComponent,
  },
];
