import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToastrModule } from 'ngx-toastr';
import { AdminModule } from './admin/admin.module';
import { environment } from 'src/environments/environment';
import { BlogModule } from './blog/blog.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  exports: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AdminModule,
    BlogModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right",
      tapToDismiss: true
    })
  ],
  providers: [
    {
      provide: "apiUrl",
      useValue: environment.apiUrl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
