import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {PostVoting, Votings} from '../+state';
import {SupplyFacade} from '../+state/supply/supply.facade';

@Component({
  selector: 'app-demand',
  templateUrl: 'demand.page.html',
  styleUrls: ['demand.page.scss']
})
export class DemandPage {
  votings$: Observable<Votings> = this.facade.votings$;


  constructor(private facade: SupplyFacade) {
    this.facade.loadVotings();
  }

}
