/**
'.' Matches any single character.
'*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)
*/
let cache = {};

function isStar(a) {
  return a === '*';
}

function isDot(a) {
  return a === '.';
}

function isLetter(a) {
  return !isDot(a) && !isStar(a);
}

function isMatch(str, rx) {
  const cacheKey = `${str},${rx}`;
  if (typeof cache[cacheKey] !== 'undefined') {
    return cache[cacheKey];
  }
  let ii = 0, jj = 0, res;
  while(jj < str.length && ii < rx.length && typeof res === 'undefined') {
    if(isLetter(rx[ii]) && !isStar(rx[ii+1])) {
      if(rx[ii] === str[jj]) {
        ii++;
        jj++;
      } else {
        res = false;
      }
    } else if(isDot(rx[ii]) && !isStar(rx[ii+1])) {
      if(str[jj]) {
        ii++;
        jj++;
      } else {
        res = false;
      }
    } else if(isLetter(rx[ii])) {
      res = matchLetterStar(str.slice(jj), rx.slice(ii));
    } else if(isDot(rx[ii])){
      res = matchDotStar(str.slice(jj), rx.slice(ii));
    } else {
      res = false;
    }
  }
  if(typeof res === 'undefined') {
    res = isEmptyMatch(str.slice(jj), rx.slice(ii)) || (ii === rx.length && jj === str.length);
  }
  cache[cacheKey] = res;
  return res;
}

function isEmptyMatch(str, rx) {
  const cacheKey = `${str},${rx}`;
  if (typeof cache[cacheKey] !== 'undefined') {
    return cache[cacheKey];
  }
  let res = !str && rx.length % 2 === 0;
  for(let ii = 1; ii < rx.length;ii+=2) {
    if(!isStar(rx[ii])) {
      res = false;
      break;
    }
  }
  if(res) {
    cache[cacheKey] = res;
  }
  return res;
}

function matchLetterStar(str, rx) {
  const cacheKey = `${str},${rx}`;
  if (typeof cache[cacheKey] !== 'undefined') {
    return cache[cacheKey];
  }
  let res = false;
  if(isEmptyMatch(str, rx)) {
    res = true;
  } else if(!str && rx.length % 2 === 0) {
    res = false;
  } else {
    res = isMatch(str, rx.slice(2));
    res = res || (str[0] === rx[0] && isMatch(str.slice(1), rx.slice(2)));
    res = res || (str[0] === rx[0] && isMatch(str.slice(1), rx));
  }
  cache[cacheKey] = res;
  return res;
}

function matchDotStar(str, rx) {
  const cacheKey = `${str},${rx}`;
  if (typeof cache[cacheKey] !== 'undefined') {
    return cache[cacheKey];
  }
  let res = false;
  if(isEmptyMatch(str, rx)) {
    res = true;
  } else if(!str && rx.length !== 2) {
    res = false;
  } else {
    res = isMatch(str, rx.slice(2));
    res = res || (str[0] && isMatch(str.slice(1), rx.slice(2)));
    res = res || (str[0] && isMatch(str.slice(1), rx));
  }
  cache[cacheKey] = res;
  return res;
}

let n = 0;
let res;
/* eslint-disable no-cond-assign */
if (!(res = isMatch('aa','aa'))) {
  console.log('Expected true for ("aa","aa")');
  console.log(`${++n} Actual ${res}\n`);
}
if (res = isMatch('aa','a')) {
  console.log('Expected false for ("aa","a")');
  console.log(`${++n} Actual ${res}\n`);
}
if (res = isMatch('aaa','aa')) {
  console.log('Expected false for ("aaa","aa")');
  console.log(`${++n} Actual ${res}\n`);
}
if (!(res = isMatch('aa', 'a*'))) {
  console.log('Expected true for ("aa", "a*")');
  console.log(`${++n} Actual ${res}\n`);
}
if (!(res = isMatch('aa', '.*'))) {
  console.log('Expected true for ("aa", ".*")');
  console.log(`${++n} Actual ${res}\n`);
}
if (!(res = isMatch('ab', '.*'))) {
  console.log('Expected true for ("ab", ".*")');
  console.log(`${++n} Actual ${res}\n`);
}
if (!(res = isMatch('aab', 'c*a*b'))) {
  console.log('Expected true for ("aab", "c*a*b")');
  console.log(`${++n} Actual ${res}\n`);
}
if (res = isMatch('ab', '.*c')) {
  console.log('Expected false for ("ab", ".*c")');
  console.log(`${++n} Actual ${res}\n`);
}
if (res = isMatch('aaa', 'aaaa')) {
  console.log('Expected false for ("aaa", "aaaa")');
  console.log(`${++n} Actual ${res}\n`);
}
if (!(res = isMatch('aaa', 'aaa*aa*'))) {
  console.log('Expected true for ("aaa", "aaa*aa*")');
  console.log(`${++n} Actual ${res}\n`);
}
if (res = isMatch('aaaaa', 'aaaa')) {
  console.log('Expected false for ("aaaaa", "aaaa")');
  console.log(`${++n} Actual ${res}\n`);
}
if (!(res = isMatch('aaa', 'a*a'))) {
  console.log('Expected true for ("aaa", "a*a")');
  console.log(`${++n} Actual ${res}\n`);
}
if (!(res = isMatch('aaa', 'ab*ac*a'))) {
  console.log('Expected true for ("aaa", "ab*ac*a")');
  console.log(`${++n} Actual ${res}\n`);
}
if (!(res = isMatch('aaa', 'ab*a*c*a'))) {
  console.log('Expected true for ("aaa", "ab*a*c*a")');
  console.log(`${++n} Actual ${res}\n`);
}
if (res = isMatch('aab', 'b.*')) {
  console.log('Expected false for ("aab", "b.*")');
  console.log(`${++n} Actual ${res}\n`);
}
if (!(res = isMatch('aasdfasdfasdfasdfas', 'aasdf.*asdf.*asdf.*asdf.*s'))) {
  console.log('Expected true for ("aasdfasdfasdfasdfas", "aasdf.*asdf.*asdf.*asdf.*s")');
  console.log(`${++n} Actual ${res}\n`);
}
if (res = isMatch('a', '.*..a*')) {
  console.log('Expected false for ("a", ".*..a*")');
  console.log(`${++n} Actual ${res}\n`);
}
if (res = isMatch('b', 'ab*b')) {
  console.log('Expected false for ("b", "ab*b")');
  console.log(`${++n} Actual ${res}\n`);
}
if (res = isMatch('', '..*')) {
  console.log('Expected false for ("", "..*")');
  console.log(`${++n} Actual ${res}\n`);
}
if (!(res = isMatch('a', '..*'))) {
  console.log('Expected true for ("a", "..*")');
  console.log(`${++n} Actual ${res}\n`);
}
if (!(res = isMatch('', '.*'))) {
  console.log('Expected true for ("", ".*")');
  console.log(`${++n} Actual ${res}\n`);
}
if (!(res = isMatch('baba', 'b*.*'))) {
  console.log('Expected true for ("baba", "b*.*")');
  console.log(`${++n} Actual ${res}\n`);
}
if (res = isMatch('a','.*..')) {
  console.log('Expected false for "a",".*.."');
  console.log(`${++n} Actual ${res}\n`);
}
