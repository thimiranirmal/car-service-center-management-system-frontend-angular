import { Routes } from '@angular/router';
import { LayoutAdminComponent } from './pages/layout-admin/layout-admin.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AdminViewBookingComponent } from './pages/admin-view-booking/admin-view-booking.component';
import { AddBrandComponent } from './pages/add-brand/add-brand.component';
import { AdminBookingComponent } from './pages/admin-booking/admin-booking.component';
import { ViewServiceListComponent } from './pages/view-service-list/view-service-list.component';
import { AssignServiceComponent } from './pages/assign-service/assign-service.component';
import { ManageCategoryComponent } from './pages/manage-category/manage-category.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { ManageBrandComponent } from './pages/manage-brand/manage-brand.component';
import { ManageMakeComponent } from './pages/manage-make/manage-make.component';
import { AddMakeComponent } from './pages/add-make/add-make.component';
import { ManageProductComponent } from './pages/manage-product/manage-product.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ManageServiceTypeComponent } from './pages/manage-service-type/manage-service-type.component';
import { AddServiceTypeComponent } from './pages/add-service-type/add-service-type.component';

export const routes: Routes = [
    {
        path: 'assignservice/:id',
        component: AssignServiceComponent
    },
    {
        path : 'managebooking',
        component:AdminViewBookingComponent
    },
    {
        path : 'addbooking',
        component:AdminBookingComponent
    },
    {
        path : 'manageservice',
        component:ViewServiceListComponent
    },
    {
        path : 'assignservice',
        component:AssignServiceComponent
    },
    {
        path : 'managecategory',
        component:ManageCategoryComponent
    },
    {
        path : 'addcategory',
        component:AddCategoryComponent
    },
    {
        path : 'managebrand',
        component:ManageBrandComponent
    },
    {
        path : 'addbrand',
        component:AddBrandComponent
    },
    {
        path : 'managemake',
        component:ManageMakeComponent
    },
    {
        path : 'addmake',
        component:AddMakeComponent
    },
    {
        path : 'manageproduct',
        component:ManageProductComponent
    },
    {
        path : 'addproduct',
        component:AddProductComponent
    },
    {
        path : 'managesrvicetype',
        component:ManageServiceTypeComponent
    },
    {
        path : 'addsrvicetype',
        component:AddServiceTypeComponent
    },
    {
        path : 'manageserviceorder',
        component:ManageServiceTypeComponent
    },
    
    
];
