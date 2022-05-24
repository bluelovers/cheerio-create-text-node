/**
 * Created by user on 2017/9/1/001.
 */
import type { AnyNode, Cheerio, AnyNode as ICheerioNode } from 'cheerio';
import type { Text as ICheerioTextNode, Text } from 'domhandler';
import { CheerioAPI } from 'cheerio';
export type { ICheerioNode, ICheerioTextNode };
export interface ICheerioTextObject {
    type: 'text';
    data: string;
}
declare module 'cheerio' {
    interface Cheerio<T> {
        createTextNode(text: string | AnyNode | unknown): Cheerio<Text>;
    }
    interface CheerioAPI {
        createTextNode(text: string | AnyNode | unknown): Cheerio<Text>;
    }
}
export declare function use<T extends Cheerio<any> | CheerioAPI>($: T): T & {
    createTextNode(): Text;
};
export declare function createTextNode(text: string | AnyNode | unknown): ICheerioTextObject;
export declare function createTextNodeCheerio(this: Cheerio<any>, text: string | AnyNode | unknown): Cheerio<Text>;
export default createTextNode;
