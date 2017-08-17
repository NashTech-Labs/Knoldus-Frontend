import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {ListColorService} from "./list-color.service";


@Component({
  selector: 'list-color-comp',
  templateUrl: './list-colors.component.html'
})
export class ListColorsComponent implements OnInit {

  colorList: any = []

  constructor(private listService: ListColorService) {
  }

  ngOnInit() {
    return this.listService.getColorsList().subscribe(
      (data) => this.colorList = data
    );
  }
}
