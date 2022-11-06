import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AnswersDto } from "../../entities/answers.dto";

@Injectable()
export class HangmanService {
  private http = inject(HttpClient);

  getWords(): Observable<AnswersDto> {
    return this.http.get<AnswersDto>('http://localhost:4200/assets/answers.json');
  }
}
