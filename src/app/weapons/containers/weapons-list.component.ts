import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { CalculateService } from '../../shared/calculate.service';
import { Weapon, WeaponType } from '../../shared/types/weapons';
import { DescFilter, SpecialStatFilter, WeaponNameFilter, WeaponTypeFilter } from '../../shared/utils/filter';
import { WeaponComparators } from '../../shared/utils/comparator';

@Component({
  selector: 'app-weapons-list',
  templateUrl: './weapons-list.component.html'
})

export class WeaponsListComponent implements OnInit {
  columns: Array<keyof Weapon> = ['atkAdd', 'defAdd', 'matAdd', 'mdfAdd', 'agiAdd', 'lukAdd', 'description'];
  nameFilter = new WeaponNameFilter();
  typeFilter = new WeaponTypeFilter(this.dataService);
  descFilter = new DescFilter();
  specialStatFilter = new SpecialStatFilter();
  weaponComparators = WeaponComparators;

  weaponList: Weapon[];
  weaponType = WeaponType;
  weaponTypes: string[] = [];

  constructor(
    public dataService: DataService,
    public calculateService: CalculateService,
  ) { }

  ngOnInit() {
    for (let key in WeaponType) {
      this.weaponTypes.push(WeaponType[key]);
    }
    this.weaponList = this.dataService.getAllWeapons().weapons;
  }

  viewDetail(weapon: Weapon) {
    // this.router.navigate([`./${weapon.id}`], { relativeTo: this.route });
  }
}


