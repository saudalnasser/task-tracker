import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  private router: Router;

  public constructor(router: Router) {
    this.router = router;
  }

  protected onAboutPage(): boolean {
    return this.router.url !== '/about';
  }
}
