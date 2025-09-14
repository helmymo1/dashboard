import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pageTitle: string = '';
  @Input() userName: string = 'Ahmed Mohamed';
  @Input() userAvatar: string = 'assets/images/avatar.png';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;
        while (child && child.firstChild) {
          child = child.firstChild;
        }
        if (child && child.snapshot.data['title']) {
          return child.snapshot.data['title'];
        }
        return 'Dashboard';
      })
    ).subscribe((title: string) => {
      this.pageTitle = title;
    });
  }
}
