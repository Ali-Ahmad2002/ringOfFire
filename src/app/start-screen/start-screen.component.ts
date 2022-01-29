import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  constructor(private router: Router) { } //private wird genutzt weil der router nur in der jeweiligen componente aufgerufen werden kann

  ngOnInit(): void {
  }

  newGame() {
    //start game
    this.router.navigateByUrl('/game');
  }

}
