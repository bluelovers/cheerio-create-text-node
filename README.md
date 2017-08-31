# cheerio-create-text-node

Add .createTextNode(text) functionality to [cheerio](https://www.npmjs.com/package/cheerio)

## demo

```
import * as cheerio from 'cheerio';
import * as cheerioCreateTextNode from 'cheerio-create-text-node';

$ = cheerio.load('<ul>  <li></li>  </ul>');
cheerioCreateTextNode.use($);
```

### append

```
let text = $.createTextNode(123);
$('ul').append(text);
```

### appendTo

```
let text = $.createTextNode(123);
text.appendTo($('ul'));
```
