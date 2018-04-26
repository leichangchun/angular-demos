import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { WorkspaceRoutingModule } from './workspace.routing';
import { FormPageModule } from './form-page/form-page.module';
import { ShareModule } from './../common/share.module';
import { TopNavComponent } from './top-nav/top-nav.component';
import { WorkspaceComponent } from './workspace.component';
import { ChartPageComponent } from './chart-page/chart-page.component';
import { HeartMapPageComponent } from './heartmap-page/heartmap-page.component';
import { TestPageComponent } from './test-page/test-page.component';

import { WorkspaceService } from './workspace.service';
import { WorkspaceGuardService} from './workspace-guard.service';
import { HeatmapService } from './heartmap-page/heatmap.service';

import { HoverDirective } from './../common/directive/hover.directive';

@NgModule({
  imports: [
    NgxEchartsModule,
    FormPageModule,
    WorkspaceRoutingModule,
    ShareModule,
    NgZorroAntdModule
  ],
  providers: [WorkspaceService, WorkspaceGuardService , HeatmapService],
  declarations: [ TopNavComponent , WorkspaceComponent , ChartPageComponent , HeartMapPageComponent, HoverDirective, TestPageComponent]
})
export class WorkspaceModule { }
