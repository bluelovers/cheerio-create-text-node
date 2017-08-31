/**
 * Created by user on 2017/9/1/001.
 */

export interface ICheerioNode
{
	type: string;
	parent?;
	prev?;
	next?;
}

export interface ICheerioTextNode extends ICheerioNode
{
	type: 'text';
	data: string;
}

export interface I$
{
	prototype;
	[index: string]: any;
	[index: number]: ICheerioNode;
}

export function use($: I$)
{
	(this.prototype || this.__proto__).createTextNode = createTextNodeCheerio;

	if (this.__proto__)
	{
		this.__proto__.createTextNode = createTextNodeCheerio;
	}

	return $;
}

export function createTextNode(text: string): ICheerioTextNode
{
	return {
		type: 'text',
		data: text.toString(),
	};
}

export function createTextNodeCheerio(text: string)
{
	return (this.prototype || this.__proto__)._make(createTextNode(text));
}

export default createTextNode;

