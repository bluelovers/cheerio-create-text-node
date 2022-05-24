/**
 * Created by user on 2017/9/1/001.
 */
import type { AnyNode, Cheerio, AnyNode as ICheerioNode } from 'cheerio';
import type { Text as ICheerioTextNode, Text } from 'domhandler';
import { CheerioAPI } from 'cheerio';

export type { ICheerioNode, ICheerioTextNode }

export interface ICheerioTextObject
{
	type: 'text';
	data: string;
}

declare module 'cheerio'
{
	interface Cheerio<T>
	{
		createTextNode(text: string | AnyNode | unknown): Cheerio<Text>
	}

	interface CheerioAPI
	{
		createTextNode(text: string | AnyNode | unknown): Cheerio<Text>
	}
}

export function use<T extends Cheerio<any> | CheerioAPI>($: T): T & {
	createTextNode(): Text
}
{
	// @ts-ignore
	$.prototype && ($.prototype.createTextNode = createTextNodeCheerio);
	// @ts-ignore
	$.__proto__ && ($.__proto__.createTextNode = createTextNodeCheerio);

	return $ as any;
}

export function createTextNode(text: string | AnyNode | unknown): ICheerioTextObject
{
	return {
		type: 'text',
		// @ts-ignore
		data: (typeof text !== 'string' && typeof text.text == 'function') ? (text as Cheerio<any>).text() : text.toString(),
	};
}

export function createTextNodeCheerio(this: Cheerio<any>, text: string | AnyNode | unknown): Cheerio<Text>
{
	// @ts-ignore
	return ((this.prototype || this.__proto__) as any as Cheerio<any>)._make(createTextNode(text));
}

export default createTextNode;
