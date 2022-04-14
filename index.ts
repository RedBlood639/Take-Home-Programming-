// @example data
const args: string[][] = [
  ["IND", "EWR"],
  ["SFO", "ATL"],
  ["GSO", "IND"],
  ["ATL", "GSO"],
];

const getPoint = (): void => {
  const data: string[] = args.flat();
  const counts: any = {};
  const pack: string[] = [];
  // @split 1D array
  data.forEach((item: string) => {
    counts[item] = (counts[item] || 0) + 1;
  });
  // get My home
  for (const [key, value] of Object.entries(counts)) {
    if (value === 1) {
      if (data.indexOf(key) % 2) pack.push(key);
      else pack.unshift(key);
    }
  }
  console.log(pack);
};

getPoint();
// ["IND", "EWR", "SFO", "ATL", "GSO", "IND", "ATL", "GSO"];
