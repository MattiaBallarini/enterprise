import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainPageComponent {

  opened: boolean = true

  sidebarToggle = (): void => {

    console.log(this.opened)
    this.opened = !this.opened
    console.log(this.opened)
  }


}
