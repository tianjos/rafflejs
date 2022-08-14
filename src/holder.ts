import Person from './_person';

export default class Holder extends Person {
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
        return false;
    }

    public isHolder(): boolean {
        return true;
    }
}