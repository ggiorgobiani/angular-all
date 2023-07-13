import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage/homepage.component';
import { AboutComponent } from './pages/about/about/about.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { PageYesComponent } from './pages/guarded-pages/page-yes/page-yes.component';
import { PageNoComponent } from './pages/guarded-pages/page-no/page-no.component';
import { PageMaybeComponent } from './pages/guarded-pages/page-maybe/page-maybe.component';
import { SayYesGuard } from './core/guards/say-yes.guard';
import { SayNoGuard } from './core/guards/say-no.guard';
import { SayMaybeGuard } from './core/guards/say-maybe.guard';


const routes: Routes = [

//homepage
{
  path: 'homepage',
  component: HomepageComponent
},
//contact
{
  path: 'contact',
  component: ContactComponent
},
//about
{
  path: 'about',
  component: AboutComponent
},


{
  path: 'page-yes',
  component: PageYesComponent,
  canActivate: [
    SayYesGuard
  ]
},
{
  path: 'page-no',
  component: PageNoComponent,
  canActivate: [
    SayNoGuard
  ]
},
{
  path: 'page-maybe',
  component: PageMaybeComponent,
  canActivate: [
    SayMaybeGuard
  ]
},
//default route
{
  path: '',
  redirectTo: 'homepage',
  pathMatch: 'full'
},


//wildCard route
//not-found
// {
//   path: '**',
//   component: NotFoundComponent
// }

//c'est pour charger uniquement a la demande
{
  path:'**',
  loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
