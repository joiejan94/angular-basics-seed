import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-list',
  template: `
            <div>
              <ng-container *ngIf="donuts.length; else nothing">
                <app-donut-card *ngFor="let donut of donuts; trackBy: trackById" [donut]="donut">
                </app-donut-card>
              </ng-container>


              <ng-template #nothing>
                <p>No Donuts here...</p>
              </ng-template>
            </div>
              `,
  styles: [

  ]
})
export class DonutListComponent implements OnInit{
  donuts!: Donut[];

  constructor() {}

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'e29d4e',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 119,
        promo: 'limited',
        description: 'For the pure chocoholic.'
      },
      {
        id: 'de302j',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        promo: 'new',
        description: 'Sticky perfection.'
      },
      {
        id: '40fsj3',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 129,
        description: 'Chocolate drizzled with caramel.'
      },
      {
        id: '46fr21',
        name: 'Sour Supreme',
        icon: 'sour-supreme',
        price: 139,
        description: 'For the sour advocate.'
      },
      {
        id: '1df91k',
        name: 'Zesty Lemon',
        icon: 'zesty-lemon',
        price: 129,
        description: 'Delicious lucious lemon.'
      }
    ]
  }

  trackById(index: number, value: Donut) {
    return value.id;
  }

}
