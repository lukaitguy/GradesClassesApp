import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Grade } from '../../models/grade-model';
import { GradesServiceService } from '../../services/grades-service.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'home-grades',
  standalone: true,
  imports: [
    RouterLink,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  templateUrl: './home-grades.component.html',
  styleUrl: './home-grades.component.css'
})
export class HomeGradesComponent implements OnInit {
  selectedYear = 0;
  grades: Grade[] = [];
  pageNumber = 1;
  pageSize = 5;
  totalCount = 0;

  kolone: string[] = [
    'skolskaGodina',
    'razred',
    'program',
    'ukupnoOdeljenja',
    'ukupnoUcenika',
    'edit',
    'delete'
  ];

  loadPagedGrades(): void {
  this.gradesService.getGradesPaged(this.pageNumber, this.pageSize).subscribe({
    next: (res) => {
      this.grades = res.grades;
      this.totalCount = res.totalCount;
    },
    error: (err) => {
      console.error("Greška pri učitavanju razreda", err);
    }
  });
  }

  onPageChange(newPage: number): void {
    this.pageNumber = newPage;
    this.loadPagedGrades();
  }
  handlePageEvent(event: PageEvent) {
  this.pageNumber = event.pageIndex + 1;
  this.pageSize = event.pageSize;
  this.loadPagedGrades();
}
  gradesService = inject(GradesServiceService);

  ngOnInit(): void {
    this.loadPagedGrades();
  }

  constructor(){
    
  }
}
