import { Goable } from "../../interfaces/Ables/Goable";

export class Area extends Goable {
  constructor(
    name,
    is_godel,
    godel_type,
    godel_cycle_num,
    is_locked,
    unlocked_by,
    goables,
    inspectables,
    doables,
    npcs,
    on_enter,
    on_exit,
    is_saferoom
  ) {
    super(
      name,
      is_godel,
      godel_type,
      godel_cycle_num,
      is_locked,
      unlocked_by,
      goables,
      inspectables,
      doables,
      npcs,
      on_enter,
      on_exit
    );
    this.is_saferoom = is_saferoom;
  }
}
