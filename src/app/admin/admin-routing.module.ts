import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsersPageComponent } from '../users-page/users-page.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: UsersPageComponent,
      },
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'products/add',
        component: ProductFormComponent
      },
      {
        path: 'products/add/:id',
        component: ProductFormComponent
      },
      {
        path: 'products/:id',
        component: ProductDetailsComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
