import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LanguageInterceptor } from 'src/helpers/interceptors/language.interceptor';
import { AddDiscountComponent } from './add-discount/add-discount.component';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';
import { FormsModule } from '@angular/forms';
import { ShowSubCategoriesComponent } from './show-sub-categories/show-sub-categories.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DeleteSubCategoryComponent } from './delete-sub-category/delete-sub-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { DeletePartnerComponent } from './delete-partner/delete-partner.component';
import { AddPartnerComponent } from './add-partner/add-partner.component';
import { ShowPartnersComponent } from './show-partners/show-partners.component';
import { DeleteDiscountComponent } from './delete-discount/delete-discount.component';
import { ShowDiscountsComponent } from './show-discounts/show-discounts.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

//adding to execute localization
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AddDiscountComponent,
    AddSubCategoryComponent,
    ShowSubCategoriesComponent,
    AddSubCategoryComponent,
    DeleteSubCategoryComponent,
    DeleteSubCategoryComponent,
    DeleteCategoryComponent,
    AdminLandingPageComponent,
    DeletePartnerComponent,
    AddPartnerComponent,
    ShowPartnersComponent,
    DeleteDiscountComponent,
    ShowDiscountsComponent,
    AddDiscountComponent,
    ShowDiscountsComponent,
    DeleteProductComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    //adding to execute localization
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
  })
  ],
  exports:[
  ],
  providers:
  [
    //adding to execute localization
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LanguageInterceptor,
      multi: true
    },
    HttpClient
  ]
})
export class AdminModule { }