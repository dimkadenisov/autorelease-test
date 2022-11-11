import { getChunks } from 'highlight-string';
const a = getChunks({ text: 'quick brown fox', substrings: ['brown'] });

console.log('testing1', a[0].text);
