import { it, describe, expect } from 'vitest';
import * as CR from '../challengeRating';

describe('Valid Challenge Rating', () => {
    it('returns true for valid challenge rating', () => {
        expect(CR.isValidChallengeRating({ challengeRating: 5 })).toBe(true);
        expect(CR.isValidChallengeRating({ challengeRating: 0 })).toBe(true);
        expect(CR.isValidChallengeRating({ challengeRating: 30 })).toBe(true);
    });

    it('returns false for invalid challenge rating', () => {
        expect(CR.isValidChallengeRating({ challengeRating: -1 })).toBe(false);
        expect(CR.isValidChallengeRating({ challengeRating: 31 })).toBe(false);
        expect(CR.isValidChallengeRating({ challengeRating: 'Oopsy' })).toBe(false);
    });
});

describe('Calculate Challenge Rating', () => {
    it('returns correct challenge rating for a standard party at each difficulty point.', () => {
        expect(CR.calculateChallengeRating(5, 3, 'Easy')).toBe('3');
        expect(CR.calculateChallengeRating(4, 4, 'Medium')).toBe('4');
        expect(CR.calculateChallengeRating(4, 6, 'Hard')).toBe('9');
        expect(CR.calculateChallengeRating(6, 10, 'Deadly')).toBe('23');
    });

    it('returns correct challenge rating for a small party at each difficulty point.', () => {
        expect(CR.calculateChallengeRating(1, 3, 'Easy')).toBe('1/4');
        expect(CR.calculateChallengeRating(2, 10, 'Medium')).toBe('5');
        expect(CR.calculateChallengeRating(1, 15, 'Hard')).toBe('7');
        expect(CR.calculateChallengeRating(2, 1, 'Deadly')).toBe('1');
    });

    it('returns correct challenge rating for a large party at each difficulty point.', () => {
        expect(CR.calculateChallengeRating(7, 3, 'Easy')).toBe('5');
        expect(CR.calculateChallengeRating(8, 4, 'Medium')).toBe('9');
        expect(CR.calculateChallengeRating(9, 6, 'Hard')).toBe('17');
        expect(CR.calculateChallengeRating(7, 10, 'Deadly')).toBe('25');
    });

    it('returns null for invalid character levels', () => {
        expect(CR.calculateChallengeRating(5, 21, 'Easy')).toBeNull();
        expect(CR.calculateChallengeRating(6, 0, 'Medium')).toBeNull();
        expect(CR.calculateChallengeRating(4, -1, 'Hard')).toBeNull();
    });

    it('returns null for invalid difficulty', () => {
        expect(CR.calculateChallengeRating(5, 3, 'Super Easy')).toBeNull();
        expect(CR.calculateChallengeRating(6, 10, 'REALLY BAD IDEA')).toBeNull();
        expect(CR.calculateChallengeRating(4, 6, 1)).toBeNull();
    });

    it('returns null for invalid number of characters', () => {
        expect(CR.calculateChallengeRating(0, 3, 'Easy')).toBeNull();
        expect(CR.calculateChallengeRating(-1, 10, 'Medium')).toBeNull();
        expect(CR.calculateChallengeRating(100, 6, 'Hard')).toBeNull();
    });
});
