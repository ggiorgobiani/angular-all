import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './pages/books/books.module';
import { DataTypeExamplesComponent } from './data-type-examples/data-type-examples.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiEndpointInterceptor } from './core/interceptors/api-endpoint.interceptor';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { PageYesComponent } from './pages/guarded-pages/page-yes/page-yes.component';
import { PageNoComponent } from './pages/guarded-pages/page-no/page-no.component';
import { PageMaybeComponent } from './pages/guarded-pages/page-maybe/page-maybe.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTypeExamplesComponent,
    PageYesComponent,
    PageNoComponent,
    PageMaybeComponent
  ],
  imports: [
    BrowserModule,
    BooksModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiEndpointInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
