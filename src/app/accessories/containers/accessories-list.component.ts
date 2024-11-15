import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { CalculateService } from '../../shared/calculate.service';
import { Accessory } from '../../shared/types/accessories';
import { AccessoryNameFilter, DescFilter, SpecialStatFilter } from '../../shared/utils/filter';
import { AccessoryComparators } from '../../shared/utils/comparator';

@Component({
  selector: 'app-accessories-list',
  templateUrl: './accessories-list.component.html'
})

export class AccessoriesListComponent implements OnInit {
  nameFilter = new AccessoryNameFilter();
  specialStatFilter = new SpecialStatFilter();
  descFilter = new DescFilter();
  accessoryComparators = AccessoryComparators;

  accessoryList: Accessory[];
  accessoryTypes: string[] = [];

  constructor(
    public dataService: DataService,
    public calculateService: CalculateService,
  ) { }

  ngOnInit() {
    this.accessoryList = this.dataService.getAllAccessories().accessories;
  }

  viewDetail(accessory: Accessory) {
    // this.router.navigate([`./${accessory.id}`], { relativeTo: this.route });
  }
}


