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
    
    SavingThrowStrength: number;
    SavingThrowDexterity: number;
    SavingThrowConstitution: number;
    SavingThrowIntelligence: number;
    SavingThrowWisdom: number;
    SavingThrowCharisma: number;

    acrobatics: number;
    animalHandling: number;
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
    sleightOfHand: number;
    stealth: number;
    survival: number;

    actions: CharacterAction[];
    bonusActions: CharacterAction[];
    reactions: CharacterAction[];

    items: string[];

}