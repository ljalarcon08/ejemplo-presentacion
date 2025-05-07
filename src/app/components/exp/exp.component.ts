import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-exp',
  standalone: true,
  imports: [MatCardModule,MatToolbarModule,CommonModule,FlexLayoutModule,FooterComponent],
  templateUrl: './exp.component.html',
  styleUrl: './exp.component.css'
})
export class ExpComponent {

}
