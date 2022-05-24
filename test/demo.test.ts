/**
 * Created by user on 2017/8/27/027.
 */

import { createTextNode, use } from '../src/index';

import cheerio, { Cheerio, CheerioAPI } from 'cheerio';
import { basename, extname } from 'path';

describe(basename(__filename, extname(__filename)), () =>
{
	let $: CheerioAPI;

	beforeEach(() =>
	{
		$ = cheerio.load('<ul>  <li></li>  </ul>');
		use($);
	});

	it(`test:append`, () =>
	{
		let len = $('ul').contents().length;

		let text = $.createTextNode(123);
		$('ul').append(text);

		expect($('ul').contents().length).toEqual(len + 1);
		expect($('ul').html()).toEqual('  <li></li>  123');
	});

	it(`test:appendTo`, () =>
	{
		let len = $('ul').contents().length;

		let text = $.createTextNode(123);
		text.appendTo($('ul'));

		expect($('ul').contents().length).toEqual(len + 1);
		expect($('ul').html()).toEqual('  <li></li>  123');
	});

	it(`test:append2`, () =>
	{
		let len = $('ul').contents().length;

		let text = createTextNode(123);
		$('ul').append(text as any);

		expect($('ul').contents().length).toEqual(len + 1);
		expect($('ul').html()).toEqual('  <li></li>  123');

		expect($('ul')).toMatchSnapshot();
	});

	it(`createTextNode return object`, () =>
	{
		let text = createTextNode(123);

		expect(text).toEqual({
			type: 'text',
			data: '123',
		});
	});

	it(`$.createTextNode instanceof cheerio`, () =>
	{
		let text = $.createTextNode(123);

		expect(text).toMatchSnapshot();
		expect(text[0]).toMatchObject({
			type: 'text',
			data: '123',
		});

		expect(text.cheerio).toMatchSnapshot();

		// @ts-ignore
		expect(text.nodeType).toMatchSnapshot();
	});

	it(`$('ul').createTextNode instanceof cheerio`, () =>
	{
		let text = $('ul').createTextNode(123);

		expect(text).toMatchSnapshot();
		expect(text[0]).toMatchObject({
			type: 'text',
			data: '123',
		});
	});

	it(`$.createTextNode(cheerio dom)`, () =>
	{
		let text = $.createTextNode(123);
		let text2 = $.createTextNode(text);

		expect(text.text()).toEqual(text2.text());
		expect(text).toMatchSnapshot();
		expect(text[0]).toMatchObject({
			type: 'text',
			data: '123',
		});
		expect(text2).toMatchSnapshot();
		expect(text2[0]).toMatchObject({
			type: 'text',
			data: '123',
		});
	});

});
