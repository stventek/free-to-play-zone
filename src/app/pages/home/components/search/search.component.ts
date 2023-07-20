import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameInfoService } from '../../services/games.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private gameInfoService: GameInfoService) {
    this.myForm = this.formBuilder.group({
      title: ['', Validators.required],
    });
  }

  onSubmit(){
    if (this.myForm.valid) {
      this.gameInfoService.searchGameInfo(this.myForm.value)
    }
  }
}
