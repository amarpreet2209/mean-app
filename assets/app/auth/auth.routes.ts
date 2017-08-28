import { SigninComponent } from './signin.component';
import { LogoutComponent } from './logout.component';
import { SignupComponent } from './signup.component';
import { Routes, RouterModule } from '@angular/router';

export const AUTH_ROUTES: Routes = [
    {path:'', redirectTo: 'signup', pathMatch: 'full'},
    {path:'signup', component: SignupComponent},
    {path:'signin', component: SigninComponent},
    {path:'logout', component: LogoutComponent}
];

