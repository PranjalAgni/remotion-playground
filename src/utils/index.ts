const FRAMES = 1000;
const SIZE = 17;
const hashMap = new Map<number, string>();

for (let idx = 0; idx < FRAMES; idx++) {
	let idxNormalized = idx % SIZE;
	const ch = String.fromCharCode('a'.charCodeAt(0) + idxNormalized);
	hashMap.set(idx, ch);
}

export const getLetterByNumber = (num: number): string | undefined => {
	const val = hashMap.get(num);
	if (!val) return 'g';
	return val;
};
