import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//import { BeanieComponent } from './beanie/beanie.component';
import { Routes, RouterModule } from '@angular/router';
import { BeanieListComponent } from './beanie-list/beanie-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { CreateCharComponent } from './create-char/create-char.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterPreviewComponent } from './character-preview/character-preview.component';

const appRoutes: Routes = [
  { path: 'CreateCharacter', component: CreateCharComponent,canActivate: [AuthGuard]},
  // { path: 'beanie/:id', component: BeanieComponent, canActivate: [AuthGuard] },
  { path: 'Characters', component: CharacterListComponent, canActivate: [AuthGuard] },
  { path: 'Character/:id', component: CharacterPreviewComponent },
  { path: 'login', component: LoginComponent },
  
  { path: '',
    redirectTo: '/CreateCharacter', // Where to go when no route is specified
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    // BeanieComponent,
    BeanieListComponent,
    PageNotFoundComponent,
    LoginComponent,
    CreateCharComponent,
    CharacterListComponent,
    CharacterPreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [DataService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
