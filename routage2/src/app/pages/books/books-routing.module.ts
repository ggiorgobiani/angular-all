import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [

//bon pratique pour books
    {
        path: 'books',
        children: [
          {
            path: '', // books index
            component: IndexComponent
          },
          {
            path: 'create',  //books create
            component: CreateComponent
          },
          {
            path: ':id',   // books read
            children: [
              {
                path: '',  //books read
                component: ReadComponent
              },
              {
               path: 'update',
               component: UpdateComponent 
              },
              {
                path: 'delete',
                component: DeleteComponent
              }
            ]
          }
      
        ]
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
