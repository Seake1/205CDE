let notes = [];


export function add (note) {
    if (note && !/^\s+$/gmi.test(note)) {
        notes.push({ timestamp: Date.now(), note });
        return true
    } else {
        return false  }  }



export function remove (index) {
    if (!notes[index] || typeof index === 'string') {
        return false  } else {
        notes.splice(index, 1);
        return true }  }



export const count = () => notes.length;
export const list = () => notes;
export function find (query) {
    return typeof query === 'string'
        ? notes.filter(({ note }) => note.toLowerCase().includes(query.toLowerCase())) : []  }
export const clear = () => { notes = [] };