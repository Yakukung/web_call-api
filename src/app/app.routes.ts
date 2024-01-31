import { Routes } from '@angular/router';
import { AsyncDemoComponent } from './pages/async-demo/async-demo.component';
import { CallApiComponent } from './pages/call-api/call-api.component';

export const routes: Routes = [
    {path: '', component: AsyncDemoComponent },
    {path: 'call-api', component: CallApiComponent }

];