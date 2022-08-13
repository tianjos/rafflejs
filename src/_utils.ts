import { v4 as uuid4 } from "uuid";

type _Range = { greaterThan: number, lessThan: number }

const guardAgainstRange = (
    value: number,
    range: _Range
): boolean =>  value > range.greaterThan && value < range.lessThan

const genUID = () => uuid4()

export { guardAgainstRange, genUID };
