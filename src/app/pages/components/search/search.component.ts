import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameInfoService } from '../../home/services/games.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private gameInfoService: GameInfoService) {
    this.myForm = this.formBuilder.group({
      title: [''],
    });
  }

  onSubmit(){
    if (this.myForm.valid) {
      this.gameInfoService.setTitle(this.myForm.value.title);
      this.gameInfoService.refreshGameInfo();
    }
  }
}
