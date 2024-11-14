import { ClrDatagridComparatorInterface } from '@clr/angular';
import { Job } from '../types/jobs';
import { Race } from '../types/races';
import { Actor } from '../types/actors';
import { Skill, SkillType } from '../types/skills';
import { Ability, AbilityType } from '../types/abilities';



export class JobNameComparator implements ClrDatagridComparatorInterface<Job> {
  compare(a: Job, b: Job) {
    return a.name < b.name ? 1 : -1;
  }
}

export class JobHPComparator implements ClrDatagridComparatorInterface<Job> {
  compare(a: Job, b: Job) {
    if (a.hp === b.hp) {
      return a.name < b.name ? 1 : -1;
    }
    return a.hp! - b.hp!;
  }
}

export class JobMPComparator implements ClrDatagridComparatorInterface<Job> {
  compare(a: Job, b: Job) {
    if (a.mp === b.mp) {
      return a.name < b.name ? 1 : -1;
    }
    return a.mp! - b.mp!;
  }
}

export class JobSPComparator implements ClrDatagridComparatorInterface<Job> {
  compare(a: Job, b: Job) {
    if (a.sp === b.sp) {
      return a.name < b.name ? 1 : -1;
    }
    return a.sp! - b.sp!;
  }
}

export class JobAtkComparator implements ClrDatagridComparatorInterface<Job> {
  compare(a: Job, b: Job) {
    if (a.atk === b.atk) {
      return a.name < b.name ? 1 : -1;
    }
    return a.atk! - b.atk!;
  }
}

export class JobDefComparator implements ClrDatagridComparatorInterface<Job> {
  compare(a: Job, b: Job) {
    if (a.def === b.def) {
      return a.name < b.name ? 1 : -1;
    }
    return a.def! - b.def!;
  }
}

export class JobMatComparator implements ClrDatagridComparatorInterface<Job> {
  compare(a: Job, b: Job) {
    if (a.mat === b.mat) {
      return a.name < b.name ? 1 : -1;
    }
    return a.mat! - b.mat!;
  }
}

export class JobMdfComparator implements ClrDatagridComparatorInterface<Job> {
  compare(a: Job, b: Job) {
    if (a.mdf === b.mdf) {
      return a.name < b.name ? 1 : -1;
    }
    return a.mdf! - b.mdf!;
  }
}

export class JobAgiComparator implements ClrDatagridComparatorInterface<Job> {
  compare(a: Job, b: Job) {
    if (a.agi === b.agi) {
      return a.name < b.name ? 1 : -1;
    }
    return a.agi! - b.agi!;
  }
}

export class JobLukComparator implements ClrDatagridComparatorInterface<Job> {
  compare(a: Job, b: Job) {
    if (a.luk === b.luk) {
      return a.name < b.name ? 1 : -1;
    }
    return a.luk! - b.luk!;
  }
}

export const JobComparators = {
  nameComparator: new JobNameComparator(),
  hpComparator: new JobHPComparator(),
  mpComparator: new JobMPComparator(),
  spComparator: new JobMPComparator(),
  atkComparator: new JobAtkComparator(),
  defComparator: new JobDefComparator(),
  matComparator: new JobMatComparator(),
  mdfComparator: new JobMdfComparator(),
  agiComparator: new JobAgiComparator(),
  lukComparator: new JobLukComparator(),
};

export class RaceNameComparator implements ClrDatagridComparatorInterface<Race> {
  compare(a: Race, b: Race) {
    return a.name < b.name ? 1 : -1;
  }
}

export class RaceHPComparator implements ClrDatagridComparatorInterface<Race> {
  compare(a: Race, b: Race) {
    if (a.hp === b.hp) {
      return a.name < b.name ? 1 : -1;
    }
    return a.hp! - b.hp!;
  }
}

export class RaceMPComparator implements ClrDatagridComparatorInterface<Race> {
  compare(a: Race, b: Race) {
    if (a.mp === b.mp) {
      return a.name < b.name ? 1 : -1;
    }
    return a.mp! - b.mp!;
  }
}

export class RaceSPComparator implements ClrDatagridComparatorInterface<Race> {
  compare(a: Race, b: Race) {
    if (a.sp === b.sp) {
      return a.name < b.name ? 1 : -1;
    }
    return a.sp! - b.sp!;
  }
}

export class RaceAtkComparator implements ClrDatagridComparatorInterface<Race> {
  compare(a: Race, b: Race) {
    if (a.atk === b.atk) {
      return a.name < b.name ? 1 : -1;
    }
    return a.atk! - b.atk!;
  }
}

export class RaceDefComparator implements ClrDatagridComparatorInterface<Race> {
  compare(a: Race, b: Race) {
    if (a.def === b.def) {
      return a.name < b.name ? 1 : -1;
    }
    return a.def! - b.def!;
  }
}

export class RaceMatComparator implements ClrDatagridComparatorInterface<Race> {
  compare(a: Race, b: Race) {
    if (a.mat === b.mat) {
      return a.name < b.name ? 1 : -1;
    }
    return a.mat! - b.mat!;
  }
}

export class RaceMdfComparator implements ClrDatagridComparatorInterface<Race> {
  compare(a: Race, b: Race) {
    if (a.mdf === b.mdf) {
      return a.name < b.name ? 1 : -1;
    }
    return a.mdf! - b.mdf!;
  }
}

export class RaceAgiComparator implements ClrDatagridComparatorInterface<Race> {
  compare(a: Race, b: Race) {
    if (a.agi === b.agi) {
      return a.name < b.name ? 1 : -1;
    }
    return a.agi! - b.agi!;
  }
}

export class RaceLukComparator implements ClrDatagridComparatorInterface<Race> {
  compare(a: Race, b: Race) {
    if (a.luk === b.luk) {
      return a.name < b.name ? 1 : -1;
    }
    return a.luk! - b.luk!;
  }
}

export const RaceComparators = {
  nameComparator: new RaceNameComparator(),
  hpComparator: new RaceHPComparator(),
  mpComparator: new RaceMPComparator(),
  spComparator: new RaceMPComparator(),
  atkComparator: new RaceAtkComparator(),
  defComparator: new RaceDefComparator(),
  matComparator: new RaceMatComparator(),
  mdfComparator: new RaceMdfComparator(),
  agiComparator: new RaceAgiComparator(),
  lukComparator: new RaceLukComparator(),
};

export class ActorNameComparator implements ClrDatagridComparatorInterface<Actor> {
  compare(a: Actor, b: Actor) {
    return a.name < b.name ? 1 : -1;
  }
}

export class ActorSecondaryNameComparator implements ClrDatagridComparatorInterface<Actor> {
  compare(a: Actor, b: Actor) {
    return a.secondaryName! < b.secondaryName! ? 1 : -1;
  }
}

export class ActorArtistComparator implements ClrDatagridComparatorInterface<Actor> {
  compare(a: Actor, b: Actor) {
    return a.artist < b.artist ? 1 : -1;
  }
}

export class ActorHPComparator implements ClrDatagridComparatorInterface<Actor> {
  compare(a: Actor, b: Actor) {
    if (a.hp === b.hp) {
      return a.name < b.name ? 1 : -1;
    }
    return a.hp! - b.hp!;
  }
}

export class ActorMPComparator implements ClrDatagridComparatorInterface<Actor> {
  compare(a: Actor, b: Actor) {
    if (a.mp === b.mp) {
      return a.name < b.name ? 1 : -1;
    }
    return a.mp! - b.mp!;
  }
}

export class ActorSPComparator implements ClrDatagridComparatorInterface<Actor> {
  compare(a: Actor, b: Actor) {
    if (a.sp === b.sp) {
      return a.name < b.name ? 1 : -1;
    }
    return a.sp! - b.sp!;
  }
}

export class ActorAtkComparator implements ClrDatagridComparatorInterface<Actor> {
  compare(a: Actor, b: Actor) {
    if (a.atk === b.atk) {
      return a.name < b.name ? 1 : -1;
    }
    return a.atk! - b.atk!;
  }
}

export class ActorDefComparator implements ClrDatagridComparatorInterface<Actor> {
  compare(a: Actor, b: Actor) {
    if (a.def === b.def) {
      return a.name < b.name ? 1 : -1;
    }
    return a.def! - b.def!;
  }
}

export class ActorMatComparator implements ClrDatagridComparatorInterface<Actor> {
  compare(a: Actor, b: Actor) {
    if (a.mat === b.mat) {
      return a.name < b.name ? 1 : -1;
    }
    return a.mat! - b.mat!;
  }
}

export class ActorMdfComparator implements ClrDatagridComparatorInterface<Actor> {
  compare(a: Actor, b: Actor) {
    if (a.mdf === b.mdf) {
      return a.name < b.name ? 1 : -1;
    }
    return a.mdf! - b.mdf!;
  }
}

export class ActorAgiComparator implements ClrDatagridComparatorInterface<Actor> {
  compare(a: Actor, b: Actor) {
    if (a.agi === b.agi) {
      return a.name < b.name ? 1 : -1;
    }
    return a.agi! - b.agi!;
  }
}

export class ActorLukComparator implements ClrDatagridComparatorInterface<Actor> {
  compare(a: Actor, b: Actor) {
    if (a.luk === b.luk) {
      return a.name < b.name ? 1 : -1;
    }
    return a.luk! - b.luk!;
  }
}

export const ActorComparators = {
  nameComparator: new ActorNameComparator(),
  secondaryNameComparator: new ActorSecondaryNameComparator(),
  artistComparator: new ActorArtistComparator(),
  hpComparator: new ActorHPComparator(),
  mpComparator: new ActorMPComparator(),
  spComparator: new ActorMPComparator(),
  atkComparator: new ActorAtkComparator(),
  defComparator: new ActorDefComparator(),
  matComparator: new ActorMatComparator(),
  mdfComparator: new ActorMdfComparator(),
  agiComparator: new ActorAgiComparator(),
  lukComparator: new ActorLukComparator(),
};

export class SkillNameComparator implements ClrDatagridComparatorInterface<Skill> {
  compare(a: Skill, b: Skill) {
    return a.name < b.name ? 1 : -1;
  }
}

export class SkillTypeComparator implements ClrDatagridComparatorInterface<Skill> {
  compare(a: Skill, b: Skill) {
    return SkillType[a.type] < SkillType[b.type] ? 1 : -1;
  }
}

export const SkillComparators = {
  nameComparator: new SkillNameComparator(),
  typeComparator: new SkillTypeComparator(),
};

export class AbilityNameComparator implements ClrDatagridComparatorInterface<Ability> {
  compare(a: Ability, b: Ability) {
    return a.name < b.name ? 1 : -1;
  }
}

export class AbilityTypeComparator implements ClrDatagridComparatorInterface<Ability> {
  compare(a: Ability, b: Ability) {
    return AbilityType[a.type] < AbilityType[b.type] ? 1 : -1;
  }
}

export class AbilitySizeComparator implements ClrDatagridComparatorInterface<Ability> {
  compare(a: Ability, b: Ability) {
    if (a.size === b.size) {
      return a.name < b.name ? 1 : -1;
    }
    return a.size - b.size;
  }
}

export const AbilityComparators = {
  nameComparator: new AbilityNameComparator(),
  typeComparator: new AbilityTypeComparator(),
  sizeComparator: new AbilitySizeComparator(),
};
