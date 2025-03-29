import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { DontGetCowtComponent } from './app/dont-get-cowt/dont-get-cowt.component';
import { FingerballWorldCupComponent } from './app/fingerball-world-cup/fingerball-world-cup.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule),  // ✅ Ensure RouterModule is available
    provideRouter([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'dont-get-cowt', component: DontGetCowtComponent },
      { path: 'fingerball-world-cup', component: FingerballWorldCupComponent },
    ], withComponentInputBinding()),
  ],
}).catch(err => console.error(err));
