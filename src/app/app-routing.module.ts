import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { ArtistsComponent } from './artists/artists.component';
import { SoccerComponent } from './soccer/soccer.component';
import { LandingComponent } from "./landing/landing.component";
import { DragComponent } from "./drag/drag.component";
import { GridColorComponent } from './grid-color/grid-color.component';
const routes: Routes = [
    { path: "", redirectTo: "/landing", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "artist", component: ArtistsComponent },
    { path: "soccer", component: SoccerComponent },
    { path: "drag", component: DragComponent },
    { path: "grid", component: GridColorComponent },
    { path: "landing", component: LandingComponent },
    

     
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
