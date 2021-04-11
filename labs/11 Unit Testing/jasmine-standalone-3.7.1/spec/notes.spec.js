import * as notes from '../src/notes.js'

describe('notes', () => {
    const DEFAULT_NOTE_COUNT = 5;
    let DEFAULT_NOTES = [];

    beforeEach(() => {
        notes.clear();

        for (let i = 0; i < DEFAULT_NOTE_COUNT; i++) {
            notes.add(`note ${i}`)
        }

        DEFAULT_NOTES = notes.list()
    });

    describe('adding notes', () => {
        it('should be able to add a new note', () => {
            expect(notes.add('sixth note')).toBe(true);
            expect(notes.count()).toBe(6)
        });

        it('should ignore blank notes', () => {
            expect(notes.add('')).toBe(false);
            expect(notes.count()).toBe(DEFAULT_NOTE_COUNT)
        });

        it('should ignore notes containing only whitespace', () => {
            expect(notes.add('   ')).toBe(false);
            expect(notes.count()).toBe(DEFAULT_NOTE_COUNT)
        });

        it('should require a string parameter', () => {
            expect(notes.add()).toBe(false);
            expect(notes.count()).toBe(DEFAULT_NOTE_COUNT)
        })
    });

    describe('removing notes', () => {
        it('should remove the first note', () => {
            expect(notes.remove(0)).toBe(true);
            expect(notes.count()).toBe(4)
        });

        it('should not remove a non-existent note', () => {
            expect(notes.remove(10)).toBe(false);
            expect(notes.count()).toBe(DEFAULT_NOTE_COUNT)
        });

        it('should not remove on empty parameter passes', () => {
            expect(notes.remove()).toBe(false);
            expect(notes.count()).toBe(DEFAULT_NOTE_COUNT)
        })
    });

    describe('getting notes', () => {
        it('should correctly find all notes containing a string (case-insensitive)', () => {
            expect(notes.find('note')).toEqual(DEFAULT_NOTES);
            expect(notes.find('Note')).toEqual(DEFAULT_NOTES)
        });

        it('should return an empty array on a query with no results', () => {
            expect(notes.find('th')).toEqual([])
        });

        it('should return an empty array on bad (non-string) queries', () => {
            expect(notes.find(undefined)).toEqual([])
        })
    })
});