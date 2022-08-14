import { genUID } from './_utils';

export default abstract class Person {
    public readonly id: string

    public readonly name: string

    constructor(name: string, id?: string) {
        this.id = id || genUID();
        this.name = name;
    }

    public abstract canHolder(): boolean
    public abstract canDonor(): boolean
    public abstract isCreator(): boolean
    public abstract isDonor(): boolean
    public abstract isHolder(): boolean
}