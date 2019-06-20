import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './LoginComponent';
import {HomeComponent} from './home/HomeComponent';
import {NsForm} from './ns-form-module/ns-form.module';
import {NsMenuModule} from './ns-menu-module/ns-menu.module';
import {MenuService} from './ns-menu-module/components/MenuService';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DynamicDemo} from "./ns-menu-module/dynamic/DynamicDemo";
import {ContentProjectDemo} from "./ns-menu-module/dynamic/ContentProjectDemo";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        DynamicDemo,
        ContentProjectDemo
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NsForm,
        NsMenuModule,
        ClarityModule,
        BrowserAnimationsModule
    ],
    providers: [MenuService],
    entryComponents:[DynamicDemo,ContentProjectDemo],
    bootstrap: [AppComponent]
})
export class AppModule {
}
