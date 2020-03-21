import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {DemandButtonComponent} from './demand-button.component';

@NgModule({
    imports: [
        IonicModule
    ],
    exports: [
        DemandButtonComponent
    ],
    declarations: [DemandButtonComponent]
})
export class DemandButtonModule {
}

