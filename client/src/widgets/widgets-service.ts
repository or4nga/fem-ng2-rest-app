import { Injectable } from '@angular/core';

@Injectable()
export class WidgetsService {
  widgets = [
    { id: 1, name: 'Widget 01', cost: 100 },
    { id: 2, name: 'Widget 02', cost: 200 },
    { id: 3, name: 'Widget 03', cost: 300 },
    { id: 4, name: 'Widget 04', cost: 400 }
  ];
}
