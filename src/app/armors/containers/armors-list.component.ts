import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { CalculateService } from '../../shared/calculate.service';
import { Armor, ArmorType } from '../../shared/types/armors';
import { ArmorNameFilter, ArmorTypeFilter, DescFilter, SpecialStatFilter } from '../../shared/utils/filter';
import { ArmorComparators } from '../../shared/utils/comparator';

@Component({
  selector: 'app-armors-list',
  templateUrl: './armors-list.component.html'
})

export class ArmorsListComponent implements OnInit {
  columns: Array<keyof Armor> = ['atkAdd', 'defAdd', 'matAdd', 'mdfAdd', 'agiAdd', 'lukAdd', 'description'];
  nameFilter = new ArmorNameFilter();
  typeFilter = new ArmorTypeFilter(this.dataService);
  descFilter = new DescFilter();
  specialStatFilter = new SpecialStatFilter();
  armorComparators = ArmorComparators;

  armorList: Armor[];
  armorType = ArmorType;
  armorTypes: string[] = [];

  constructor(
    public dataService: DataService,
    public calculateService: CalculateService,
  ) { }

  ngOnInit() {
    for (let key in ArmorType) {
      this.armorTypes.push(ArmorType[key]);
    }
    this.armorList = this.dataService.getAllArmors().armors;
  }

  viewDetail(armor: Armor) {
    // this.router.navigate([`./${armor.id}`], { relativeTo: this.route });
  }
}


