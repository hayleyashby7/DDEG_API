import { describe, it, expect } from 'vitest';
import * as util from '../dataUtils';

describe('formatString', () => {
    it('should return a string with underscores removed and first letter capitalised', () => {
        expect(util.formatString('test_string')).toBe('Test string');
    });

    it('should return a string with multiple underscores removed and first letter capitalised', () => {
        expect(util.formatString('test_string_2')).toBe('Test string 2');
    });

    it('should convert a capitalised string with multiple underscores to just the first letter capitalised and the rest lowercase', () => {
        expect(util.formatString('TEST_STRING_2')).toBe('Test string 2');
    });
});

describe('removeUnderscores', () => {
    it('should return a string with underscores removed', () => {
        expect(util.removeUnderscores('test_string')).toBe('test string');
    });

    it('should return a string with multiple underscores removed', () => {
        expect(util.removeUnderscores('test_string_2')).toBe('test string 2');
    });

    it('should return a string with no underscores', () => {
        expect(util.removeUnderscores('teststring')).toBe('teststring');
    });
});

describe('capitalise', () => {
    it('should return a string with the first letter capitalized', () => {
        expect(util.capitalise('test')).toBe('Test');
    });

    it('should convert a capitalised string to just the first letter capitalised and the rest lowercase', () => {
        expect(util.capitalise('TEST')).toBe('Test');
    });

    it('should handle an already correctly capitalised string', () => {
        expect(util.capitalise('Test')).toBe('Test');
    });
});
