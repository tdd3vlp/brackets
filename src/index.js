module.exports = function check(str, bracketsConfig) {
  let arrayed = str.split('');
  let dupl;

  function trim(str) {
    dupl = str.slice();

    bracketsConfig.forEach((el) => {
      for (let i = 0; i < dupl.length; i++) {
        if (dupl[i] === el[0] && dupl[i + 1] === el[1]) dupl.splice(i, 2);
      }
    });

    if (dupl.length === 0) return true;
    if (JSON.stringify(dupl) === JSON.stringify(str)) return false;

    return trim(dupl);
  }

  let result = trim(arrayed);
  return result;
};
