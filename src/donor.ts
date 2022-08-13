import { Person } from './_person';

export class Donor extends Person {
    constructor(name: string, id?: string) {
        super(name, id)
    }
 
    public canHolder(): boolean {
        return true;
    }
    public canDonor(): boolean {
        return true;
    }
    public isCreator(): boolean {
        return false;
    }

    public isDonor(): boolean {
        return true;
    }

    public isHolder(): boolean {
        return false;
    }
}