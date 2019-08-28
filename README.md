# trump-img
Custom element based on the HTML `img` tag that automatically describes photographs of Donald Trump

The `trump-img` tag replaces the standard `img` tag for use in
displaying photographs of Donald Trump. This helpful web component
uses sophisticated AI modeling, trained on decades of news articles,
photographs, television broadcasts, commentary, public statements, court
documents, and the entirety of the `@realDonaldTrump` Twitter emissions
in order to automatically detect and caption what Trump is doing in any
photograph specified by the element's `src` attribute. The `trump-img`
tag displays a caption and sets the `alt` and `title` attributes automatically.
This open source project is intended to save news organizations and publishers
millions of dollars in analysis and copy writing costs.

## Demo

See a [demonstration](https://robbear.github.io/trump-img/demos/demo.html)

## Usage

### Install

```
npm install trump-img
```

### HTML

Inject or import `trump-img`.

#### inject

```
<script type="module" src="//path/to/TrumpImg.js"></script>
```

#### import

```
import TrumpImg from '//path/to/TrumpImg.js';
```

#### html

```
<trump-img src="./images/trump-doing-anything.jpg"/>
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright © 2019-present, [robbear](https://github.com/robbear)
 