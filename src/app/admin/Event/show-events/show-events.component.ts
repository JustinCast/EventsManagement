import { Component, OnInit } from "@angular/core";
import { DialogManagerService } from "src/app/services/dialog-manager.service";
import { EventService } from "src/app/services/event.service";

@Component({
  selector: "app-show-events",
  templateUrl: "./show-events.component.html",
  styleUrls: ["./show-events.component.scss"]
})
export class ShowEventsComponent implements OnInit {
  constructor(
    private _events: EventService,
    private _dialog: DialogManagerService
  ) {}

  ngOnInit() {}

  editEvent(index: number) {
    
  }

  deleteActivity(index: number) {}
}
