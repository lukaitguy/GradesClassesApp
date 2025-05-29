import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatIconModule } from '@angular/material/icon'; 
import { ClassesFormOptions, CodebookServiceService, SelectOption } from '../../services/codebook-service.service';
import { ClassesServiceService } from '../../services/classes-service.service';

@Component({
  selector: 'classes-form',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './classes-form.component.html',
  styleUrl: './classes-form.component.css'
})
export class ClassesFormComponent implements OnInit {
  classForm!: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private codeBookService: CodebookServiceService,
    private classesService: ClassesServiceService,
  ){}
  
  odabranaSkolskaGodina: string = '';
  odabraniRazred: string = '';
  jezikNastaveOptions: SelectOption[] = [];
  prviStraniJezikOptions: SelectOption[] = [];
  vrstaOdeljenjaOptions: SelectOption[] = [];
  gradeId: number = 0;
  
  ngOnInit(): void {
    this.initializeForm();
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { grade: any};

    if(state?.grade) {
      this.odabranaSkolskaGodina = state.grade.skolskaGodina
      this.odabraniRazred = state.grade.razred
      this.gradeId = state.grade.id;
    }
    
    this.loadFormOptions();
  }
  initializeForm() 
  {
    this.classForm = this.fb.group({
      odabranaSkolskaGodina: [{ value: '', disabled: true }],
      odabraniRazred: [{ value: '', disabled: true }],
      nazivOdeljenja: [null, Validators.required],
      odeljenskiStaresina: [null],
      vrstaOdeljenja: [null, Validators.required],
      smena: [null],
      kombinovanoOdeljenje: [false],
      celodnevnaNastava: [false],
      izdvojenoOdeljenje: [false],
      nazivIzdvojeneSkole: [null],
      jezikNastave: [null, Validators.required],
      dvojezicnoOdeljenje: [false],
      prviStraniJezik: [null],
      ukBrUcenika: [{ value: null, disabled: true }],
      brUcenika: [{ value: null, disabled: true }],
      brUcenica: [{ value: null, disabled: true }]
    });
  }
  loadFormOptions(): void{
    this.codeBookService.getClassesFormOptions().subscribe({
      next: (options: ClassesFormOptions) => {
        this.jezikNastaveOptions = options.jezikNastave,
        this.prviStraniJezikOptions = options.prviStraniJezik,
        this.vrstaOdeljenjaOptions = options.vrstaOdeljenja
      },
      error: (err) => {
        console.log("Greska prilikom ucitavanja podataka: ", err);
      }
    })
  }
  onSubmit() {
    if (this.classForm.valid) {
      const formData = {
        ...this.classForm.value,
        RazredId: this.gradeId,
      };
      console.log(formData);
      // Sacuvaj
    } else {
      console.log('Forma nije validna');
    }
  }
  
  
}
