import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import ptBr from '@angular/common/locales/pt';
import { LayoutModule } from './layout/layout.module';
import { ProductService } from './services/product.service';


registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    ProductService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
