import { Ability } from "./ability";
import { CharacterAction } from "./characteraction"
import { Item } from "./item";
import { Skill } from "./skill";

export interface Character{
    id: string;
    name: string;

    subClass: string;
    class: string;
    race: string;

    level: number;
    proficiencyModifier: number;
    movement: number;

    abilities: Ability[];

    skills: Skill[];

    mainActions: CharacterAction[];
    bonusActions: CharacterAction[];
    reactions: CharacterAction[];

    items: Item[];

}