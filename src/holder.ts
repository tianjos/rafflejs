import { Person } from './_person';

export class Holder extends Person {
    constructor(id?: string) {
        super(id)
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
        return false;
    }

    public isHolder(): boolean {
        return true;
    }
}