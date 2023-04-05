import { it, describe, expect } from 'vitest';
import * as CR from '../challengeRating';

describe('Valid Challenge Rating', () => {
    it('returns true for valid challenge rating', () => {
        expect(CR.isValidChallengeRating({ challengeRating: 5 })).toBe(true);
    });

    it('returns false for invalid challenge rating', () => {
        expect(CR.isValidChallengeRating({ challengeRating: -1 })).toBe(false);
        expect(CR.isValidChallengeRating({ challengeRating: 31 })).toBe(false);
    });
});

describe('Calculate Challenge Rating', () => {
    it('returns correct challenge rating for a standard party at each difficulty point.', () => {
        expect(CR.calculateChallengeRating(6, 3, 'Easy')).toBe('3');
        expect(CR.calculateChallengeRating(4, 4, 'Medium')).toBe('4');
        expect(CR.calculateChallengeRating(4, 6, 'Hard')).toBe('8');
        expect(CR.calculateChallengeRating(5, 12, 'Deadly')).toBe('20');
    });
});
