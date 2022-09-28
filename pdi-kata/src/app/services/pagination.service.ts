import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  private itemsPerPage: number = 20;
  private currentPage: number = 1;
  private totalItems: number = 1;

  constructor() { }

  public findCurrentNumber(): number {
    return this.currentPage;
  }

  public findItemsPerPage(): number {
    return this.itemsPerPage;
  }

  public findTotalItems(): number {
      return this.totalItems
  }
}
