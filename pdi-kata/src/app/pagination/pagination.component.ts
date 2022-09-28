import { Component, OnInit } from '@angular/core';
import {PaginationService} from "../services/pagination.service";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor(private paginationService: PaginationService) {}

  ngOnInit(): void {
  }

  public findCurrentPage(): number {
    return this.paginationService.findCurrentPage();
  }

  public findItemsPerPage(): number {
    return this.paginationService.findItemsPerPage()
  }

  public findTotalItems(): number {
    return this.paginationService.findTotalItems()
  }
}
