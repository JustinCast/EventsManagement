import { Component, OnInit } from '@angular/core';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-show-instructors',
  templateUrl: './show-instructors.component.html',
  styleUrls: ['./show-instructors.component.scss']
})
export class ShowInstructorsComponent implements OnInit {

  constructor(private _instructor: InstructorService) { }

  ngOnInit() {
    this._instructor.loading = true;
    this._instructor.getInstructors();
  }

}
