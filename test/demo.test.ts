/**
 * Created by user on 2017/8/27/027.
 */

import { relative, expect } from './_local-dev';
import * as cheerioCreateTextNode from '..';

import * as cheerio from 'cheerio';

describe(relative(__filename), () =>
{
	let $;

	beforeEach(() =>
	{
		$ = cheerio.load('<ul>  <li></li>  </ul>');
		cheerioCreateTextNode.use($);
	});

	it(`test:append`, () =>
	{
		let len = $('ul').contents().length;

		let text = $.createTextNode(123);
		$('ul').append(text);

		expect($('ul').contents().length).to.equal(len + 1);
		expect($('ul').html()).to.equal('  <li></li>  123');
	});

	it(`test:appendTo`, () =>
	{
		let len = $('ul').contents().length;

		let text = $.createTextNode(123);
		text.appendTo($('ul'));

		expect($('ul').contents().length).to.equal(len + 1);
		expect($('ul').html()).to.equal('  <li></li>  123');
	});

	it(`test:append2`, () =>
	{
		let len = $('ul').contents().length;

		let text = cheerioCreateTextNode.createTextNode(123);
		$('ul').append(text);

		expect($('ul').contents().length).to.equal(len + 1);
		expect($('ul').html()).to.equal('  <li></li>  123');
	});

	it(`createTextNode return object`, () =>
	{
		let text = cheerioCreateTextNode.createTextNode(123);

		expect(text).to.not.be.an.instanceof(cheerio);
		expect(text).to.deep.equal({
			type: 'text',
			data: '123',
		});
	});

	it(`$.createTextNode instanceof cheerio`, () =>
	{
		let text = $.createTextNode(123);

		expect(text).to.be.an.instanceof(cheerio);
		expect(text[0]).to.own.include({
			type: 'text',
			data: '123',
		});
	});

	it(`$('ul').createTextNode instanceof cheerio`, () =>
	{
		let text = $('ul').createTextNode(123);

		expect(text).to.be.an.instanceof(cheerio);
		expect(text[0]).to.own.include({
			type: 'text',
			data: '123',
		});
	});

	it(`$.createTextNode(cheerio dom)`, () =>
	{
		let text = $.createTextNode(123);
		let text2 = $.createTextNode(text);

		expect(text.text()).to.equal(text2.text());
		expect(text).to.be.an.instanceof(cheerio);
		expect(text[0]).to.own.include({
			type: 'text',
			data: '123',
		});
		expect(text2).to.be.an.instanceof(cheerio);
		expect(text2[0]).to.own.include({
			type: 'text',
			data: '123',
		});
	});

});
