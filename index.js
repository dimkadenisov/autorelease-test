import { getChunks } from 'highlight-string';
const a = getChunks({ text: 'quick brown fox', substrings: ['brown'] });

console.log('testing', a[0].text);
