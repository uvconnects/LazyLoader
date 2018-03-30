import { NgModule } from '@angular/core';
import { AboutRoutingModule} from './aboutRoutingModule';
import { CommonModule } from '@angular/common';
import 'hammerjs';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [ AboutRoutingModule,
    CommonModule
   ],
  declarations: [
    AboutComponent
  ],
  providers: []
})
export class AboutModule { }
