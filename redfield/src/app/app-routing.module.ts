import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUserProfileComponent } from './components/user-profile/form-user-profile/form-user-profile.component';

const routes: Routes = [{ path: '', component: FormUserProfileComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
