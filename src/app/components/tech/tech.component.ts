import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from '../footer/footer.component';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [MatCardModule,MatToolbarModule,CommonModule,FlexLayoutModule,FooterComponent,MatListModule],
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.css'
})
export class TechComponent {

}
