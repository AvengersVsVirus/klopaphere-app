import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./shared/sso/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuardService],
    loadChildren: () => import("./tabs/tabs.module").then(m => m.TabsPageModule)
  },
  {
    path: "landing",
    loadChildren: () =>
      import("./shared/landing/landing.module").then(m => m.LandingPageModule)
  },
  {
    path: "implicit/authcallback",
    loadChildren: () =>
      import("./shared/sso/implicit/auth-callback/auth-callback.module").then(
        m => m.AuthCallbackPageModule
      )
  },
  {
    path: "implicit/endsession",
    loadChildren: () =>
      import("./shared/sso/implicit/end-session/end-session.module").then(
        m => m.EndSessionPageModule
      )
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
