import { Person } from './_person';

export class Creator extends Person {
    constructor(name: string, id?: string) {
        super(name, id)
    }

    public canHolder(): boolean {
        return false;
    }
    public canDonor(): boolean {
        return false;
    }
    public isCreator(): boolean {
        return true;
    }

    public isDonor(): boolean {
        return false
    }

    public isHolder(): boolean {
        return false;
    }

}