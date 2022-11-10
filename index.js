import { getChunks } from 'highlight-string';
const a = getChunks({ text: 'quick brown fox', substrings: ['brown'] });

console.log('testing11', a[0].text);
