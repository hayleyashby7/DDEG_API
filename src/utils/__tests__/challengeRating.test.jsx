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
