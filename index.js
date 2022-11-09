import { getChunks } from 'highlight-string';
const a = getChunks({ text: 'quick brown fox', substrings: ['brown'] });

console.log('test', a[0].text);
