import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from "./pages/welcome/welcome.component";
import { LayoutAdminComponent } from "./pages/layout-admin/layout-admin.component";
import { LoginComponent } from "./pages/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomeComponent, LayoutAdminComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cscms';
}
