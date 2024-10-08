export interface Able {
  id: string;
  name: string;
  description: string;
  // on_go?: () => {};
  // on_do?: () => {};
  // on_inpsect?: () => {};
  // on_talk?: () => {};
  // on_use?: () => {};
}
export interface Goable extends Able {
  on_go: () => {};
  should_be_goable?: boolean | (() => boolean);
}
export interface Doable extends Able {
  on_do: () => {};
}
export interface Inspectable extends Able {
  on_inspect: () => {};
}
export interface Talkable extends Able {
  on_talk: () => {};
}
export interface Usable extends Able {
  effect: string;
  on_use: () => {};
}
