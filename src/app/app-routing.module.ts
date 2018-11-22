import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechieComponent } from './techie/techie.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { TechiesComponent } from './techies/techies.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/techies', pathMatch: 'full' },
  { path: 'techies', component: TechiesComponent },
  { path: 'techie', component: TechieComponent },
  { path: 'submissions', component: SubmissionsComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ TechiesComponent,
                                   TechieComponent,
                                   SubmissionsComponent,
                                   PagenotfoundComponent ];
