import first from './first';
import { Operator } from './operator';

describe('first', () => {

    it('should be terminal', () => {
        const operator: Operator<number, number> = first((n: number) => n%2 === 0);
        expect(operator.isTerminal).toBeTruthy();
    });

    it('should find value', () => {
        const operator: Operator<number, number> = first((n: number) => n%2 === 0);
        expect(operator.perform(4)).toEqual({
            value: 4,
            skip: false
        });
    });

    it('should not find value', () => {
        const operator: Operator<number, number> = first((n: number) => n%2 === 0);
        expect(operator.perform(5)).toEqual({
            value: 5,
            skip: true
        });
    });
})