import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>(); //make this listanable from the outside with the output adnotation
  constructor() { }

  ngOnInit(): void {
  }

  onToggleSidenav(){
      this.sidenavToggle.emit();
  }
}
