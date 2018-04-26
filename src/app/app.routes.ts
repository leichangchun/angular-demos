import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './common/components/notfound/notfound.component';


// 根模块路由信息
const routes: Routes = [
    { path: '', redirectTo: 'workspace' , pathMatch : 'full' },
    { path: 'login', component: LoginComponent },
    { path: '**' , component: NotfoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
