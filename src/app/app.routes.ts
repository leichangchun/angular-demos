import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { NotfoundComponent } from './common/components/notfound/notfound.component';


// 根模块路由信息
const routes: Routes = [
    { path: '', redirectTo: 'workspace' , pathMatch : 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'login2', component: Login2Component },
    { path: '**' , component: NotfoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
