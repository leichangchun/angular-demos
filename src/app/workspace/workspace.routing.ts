import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkspaceComponent } from './workspace.component';
import { ChartPageComponent } from './chart-page/chart-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import { TestPageComponent } from './test-page/test-page.component';
import { WorkspaceGuardService } from './workspace-guard.service';


const routes: Routes = [
    {
        path: 'workspace',
        component: WorkspaceComponent,
        canActivate: [WorkspaceGuardService],
        canActivateChild: [WorkspaceGuardService],
        children: [
            {
                path: '',
                redirectTo: 'form',
                pathMatch: 'full'
            },
            {
                path: 'chart/:id',
                component: ChartPageComponent
            },
            {
                path: 'form',
                component: FormPageComponent,
                canDeactivate: [WorkspaceGuardService]
            },
            {
                path: 'test',
                component: TestPageComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class WorkspaceRoutingModule { }
