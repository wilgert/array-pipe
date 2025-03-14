import { Operator, distinct } from './operators';

describe('distinct', () => {

    it('should not be terminal', () => {
        const operator: Operator<number, number> = distinct();
        expect(operator.isTerminal()).toBe(false);
    });

    it('should remove duplicated values', () => {
        const operator: Operator<number, number> = distinct();

        expect(operator.perform(5)).toEqual({
            value: 5,
            skip: false
        });
        expect(operator.perform(6)).toEqual({
            value: 6,
            skip: false
        })
        expect(operator.perform(5)).toEqual({
            value: 5,
            skip: true
        })
    });
});
