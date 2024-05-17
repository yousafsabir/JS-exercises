// Parse seconds into human readable format
// kata: https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

function formatDuration(seconds) {
  return (
    [
      ["year", 31536000],
      ["day", 86400],
      ["hour", 3600],
      ["minute", 60],
      ["second", 1],
    ].reduce((acc, curr) => {
      if (seconds < curr[1]) return acc;
      const value = ~~(seconds / curr[1]); // ~~ = Math.floor()
      seconds -= value * curr[1];
      if (acc) acc += seconds ? ", " : " and ";
      return acc + `${value} ${curr[0]}${value === 1 ? "" : "s"}`;
    }, "") || "now"
  );
}
