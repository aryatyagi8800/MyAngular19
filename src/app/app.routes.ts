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
];
