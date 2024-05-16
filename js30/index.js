// kata: https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/javascript

// 16-10-2024
function rot13(str) {
  return str
    .split("")
    .map((v) => {
      if (!/[a-zA-Z]/.test(v)) return v;
      return String.fromCharCode(
        v.charCodeAt(0) + (v.toLowerCase().charCodeAt(0) <= 109 ? 13 : -13),
      ); // 109 being the charCode of "m"
    })
    .join("");
}
