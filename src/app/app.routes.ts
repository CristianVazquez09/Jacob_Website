import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DropdowMenuComponent } from './pages/dropdow-menu/dropdow-menu.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'menu', component: DropdowMenuComponent}
];


