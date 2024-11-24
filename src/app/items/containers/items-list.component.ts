import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { CalculateService } from '../../shared/calculate.service';
import { Item } from '../../shared/types/items';
import { DescFilter, NameFilter } from '../../shared/utils/filter';
import { GET_ITEM_PLACES } from '../../shared/database/itemPlaceDataBase';
import { ItemComparators } from '../../shared/utils/comparator';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html'
})

export class ItemsListComponent implements OnInit {
  places = GET_ITEM_PLACES;
  columns: Array<keyof Item> = ['description'];
  nameFilter = new NameFilter();
  descFilter = new DescFilter();
  itemComparators = ItemComparators;

  itemList: Item[];
  itemTypes: string[] = [];

  constructor(
    public dataService: DataService,
    public calculateService: CalculateService,
  ) { }

  ngOnInit() {
    this.itemList = this.dataService.getAllItems().items;
  }

  viewDetail(item: Item) {
    // this.router.navigate([`./${item.id}`], { relativeTo: this.route });
  }
}


