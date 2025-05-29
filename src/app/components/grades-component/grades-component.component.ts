import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { GradesFormOptions, CodebookServiceService, SelectOption } from '../../services/codebook-service.service';
import { GradesServiceService } from '../../services/grades-service.service';

@Component({
  selector: 'grades-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './grades-component.component.html',
  styleUrl: './grades-component.component.css',
})
export class GradesComponentComponent {
  gradeForm!: FormGroup;
  programOption: SelectOption[] = [];
  razredOption: SelectOption[] = [];
  skolskaGodinaOption: SelectOption[] = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private codebookService: CodebookServiceService,
    private gradeService: GradesServiceService,
  ) {}
  
  ngOnInit():void{
    this.initForm();
    this.loadFormOptions();
  }
  
  initForm():void{
    this.gradeForm = this.fb.group({
      programId: [null, Validators.required],
      razredId: [null, Validators.required],
      skolskaGodinaId: [null, Validators.required]
    });
  }
  
  loadFormOptions(): void{
    this.codebookService.getGradeFormOptions().subscribe({
      next: (options: GradesFormOptions) => {
        this.programOption = options.programi,
        this.razredOption = options.razredi,
        this.skolskaGodinaOption = options.skolskeGodine;
      },
      error: (err) => {
        console.error("Greska pri ucitavanju iz baze", err);
      }
    })
  }
  
  onSubmit(){
    if(this.gradeForm.valid){
      const gradeData = this.gradeForm.value;
      this.gradeService.createGrade(gradeData).subscribe({
        next: (res) => {
          console.log("Uspesno kreiran razred: ", res);
          this.router.navigate(['/classes/create'], { state: res });
        },
        error: (err) => {
          console.error("Greska priliko kreiranja razreda: ", err)
        }
      });
    }
    else{
      this.gradeForm.markAllAsTouched();
    }
  }
}
