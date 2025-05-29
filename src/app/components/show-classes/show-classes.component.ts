import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-show-classes',
  standalone: true,
  imports: [CommonModule, RouterLink, MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './show-classes.component.html',
  styleUrl: './show-classes.component.css'
})
export class ShowClassesComponent {

  displayedColumns: string[] = [
    'odeljenje',
    'odeljenskiStaresina',
    'ukupanBrojUcenika',
    'izdvojenoOdeljenje',
    'jezikNastave',
    'edit',
    'delete'
  ];

  dataSource = [
    {
      odeljenje: 'I-1',
      odeljenskiStaresina: 'Marija Petrovic',
      ukupanBrojUcenika: 28,
      izdvojenoOdeljenje: false,
      jezikNastave: 'Srpski'
    },
    {
      odeljenje: 'II-2',
      odeljenskiStaresina: 'Nikola Jovanovic',
      ukupanBrojUcenika: 25,
      izdvojenoOdeljenje: true,
      jezikNastave: 'Madjarski'
    }
  ];

  constructor(private router: Router) {}

  onEdit(row: any) {
    // Implementacija navigacije ili otvaranja forme za izmenu
    console.log('Edituj:', row);
  }

  onDelete(row: any) {
    // Implementacija logike za brisanje
    console.log('Obrisi:', row);
  }
}
