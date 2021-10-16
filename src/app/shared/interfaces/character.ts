import { CharacterAction } from "./characteraction"

export interface Character{
    id: string;
    name: string;

    movement: number;

    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;

    strengthmodifier: number;
    dexteritymodifier: number;
    constitutionmodifier: number;
    intelligencemodifier: number;
    wisdommodifier: number;
    charismamodifier: number;

    strengthsavingthrow: number;
    dexteritysavingthrow: number;
    constitutionsavingthrow: number;
    intelligencesavingthrow: number;
    wisdomsavingthrow: number;
    charismasavingthrow: number;

    acrobatics: number;
    animalhandling: number;
    arcana: number;
    athletics: number;
    deception: number;
    history: number;
    insight: number;
    intimidation: number;
    investigation: number;
    medicine: number;
    nature: number;
    perception: number;
    performance: number;
    persuasion: number;
    religion: number;
    sleightofhand: number;
    stealth: number;
    survival: number;

    mainactions: CharacterAction[];
    bonusactions: CharacterAction[];
    reactions: CharacterAction[];

    items: string[];

}