// Parse seconds into human readable format
// kata: https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

function formatDuration(seconds) {
  if (!seconds) return "now";
  const units = [
    ["year", 31536000],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
    ["second", 1],
  ];
  let output = "";
  for (let i = 0; i < units.length; i++) {
    if (seconds < units[i][1]) continue;
    let reminder = seconds % units[i][1];
    if (output) {
      output += !reminder ? " and " : ", ";
    }
    let unit = (seconds - reminder) / units[i][1];
    output += unit + " " + units[i][0];
    if (unit > 1) output += "s";
    seconds -= unit * units[i][1];
  }
  return output;
}
