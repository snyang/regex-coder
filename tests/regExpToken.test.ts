import RegExpToken from '../src/regExpToken';

const prefix = 'test.regexp';
test(`${prefix}.basic`, () => {
	expect(RegExpToken.alphanumeric).toBe('\\w');
	expect(RegExpToken.any).toBe('.');
	expect(RegExpToken.asterisk).toBe('*');
	expect(RegExpToken.backslash).toBe('\\');
	expect(RegExpToken.backspace).toBe('[\\b]');
	expect(RegExpToken.begin).toBe('^');
	expect(RegExpToken.capturingParentheses('x')).toBe('(x)');
	expect(RegExpToken.capturingParentheses('x', 'var')).toBe('(?<var>:x)');
	expect(RegExpToken.carriageReturn).toBe('\\r');
	expect(RegExpToken.caseInsensitiveSearchFlag).toBe('i');
	expect(RegExpToken.characterSet('x', 'y', 'z')).toBe('[xyz]');
	expect(RegExpToken.negatedCharacterSet('x', 'y', 'z')).toBe('[^xyz]');
	expect(RegExpToken.digit).toBe('\\d');
	expect(RegExpToken.dot).toBe('.');
	expect(RegExpToken.dotIsNewLineFlag).toBe('s');
	expect(RegExpToken.end).toBe('$');
	expect(RegExpToken.formfeed).toBe('\\f');
	expect(RegExpToken.globalSearchFlag).toBe('g');
	expect(RegExpToken.hex('0A')).toBe('\\x0A');
	expect(RegExpToken.linefeed).toBe('\\n');
	expect(RegExpToken.lookahead('x', 'y')).toBe('x(?=y)');
	expect(RegExpToken.lookbehind('x', 'y')).toBe('(?<=y)x');
	expect(RegExpToken.more).toBe('*');
	expect(RegExpToken.multipleLineSearchFlag).toBe('m');
	expect(RegExpToken.negatedLookahead('x', 'y')).toBe('x(?!y)');
	expect(RegExpToken.negatedLookbehind('x', 'y')).toBe('(?<!y)x');
	expect(RegExpToken.nonCapturingParentheses('x')).toBe('(?:x)');
	expect(RegExpToken.nonDigit).toBe('\\D');
	expect(RegExpToken.nonWhitespace).toBe('\\S');
	expect(RegExpToken.nonWord).toBe('\\W');
	expect(RegExpToken.nonWordBoundary).toBe('\\B');
	expect(RegExpToken.null).toBe('\\0');
	expect(RegExpToken.occurrence(5)).toBe('{5}');
	expect(RegExpToken.occurrenceOrMore(5)).toBe('{5, }');
	expect(RegExpToken.occurrenceOrMore(5, 10)).toBe('{5, 10}');
	expect(RegExpToken.oneOrMore).toBe('+');
	expect(RegExpToken.or('x', 'y')).toBe('x|y');
	expect(RegExpToken.plus).toBe('+');
	expect(RegExpToken.questionmark).toBe('?');
	expect(RegExpToken.strickySearchFlag).toBe('y');
	expect(RegExpToken.tab).toBe('\\t');
	expect(RegExpToken.unicode('AAAA')).toBe('\\uAAAA');
	expect(RegExpToken.unicodeFlag).toBe('u');
	expect(RegExpToken.unicodeU('AAAA')).toBe('\\u{AAAA}');
	expect(RegExpToken.verticalTab).toBe('\\v');
	expect(RegExpToken.whitespace).toBe('\\s');
	expect(RegExpToken.wordBoundary).toBe('\\b');
	expect(RegExpToken.zeroOrOne).toBe('?');
});

test(`${prefix}.encode`, () => {
	expect(RegExpToken.encodeRegExp('a^\\.()[]?+*|$z')).toBe('a\\^\\\\\\.\\(\\)\\[\\]\\?\\+\\*\\|\\$z');
	expect(RegExpToken.encodeRegExp('^\\a-z]', true)).toBe('\\^\\\\a\\-z\\]');
	expect(RegExpToken.encodeRegExp('a^z', true)).toBe('a^z');
	expect(RegExpToken.encodeRegExp('-z', true)).toBe('-z');
	expect(RegExpToken.encodeRegExp('a-', true)).toBe('a-');
});
