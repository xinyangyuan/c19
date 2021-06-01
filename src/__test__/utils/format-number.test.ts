import formatNumber from '../../utils/format-number'

test('format number with comma separated', () => {
    process.env.LANG = 'en_US.UTF-8';
    expect(formatNumber(123456789)).toBe("123,456,789");
});


test('format number with period separated', () => {
    process.env.LANG = 'ca_ES.UTF-8';
    expect(formatNumber(123456789)).toBe("123.456.789");
});
