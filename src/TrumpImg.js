import * as symbols from '../node_modules/elix/src/symbols.js';
import * as template from '../node_modules/elix/src/template.js';
import WrappedStandardElement from '../node_modules/elix/src/WrappedStandardElement.js';

/**
 * Base class for custom <trump-img>.
 * 
 * `TrumpImg` wraps a standard HTML `img` element, allowing for a highly sophisticated
 * AI model to assess nn image of Donald Trump in order to generate a caption, alt text, 
 * and title that describes the displayed photograph.
 * 
 * The algorithm exploits decades of news articles, public statements, and actions
 * regarding Donald Trump's activities in order to automatically discern what Trump
 * is doing in the photo.
 * 
 * @inherits WrappedStandardElement
 * @mixes AriaRoleMixin
 * @mixes ComposedFocusMixin
 * @mixes FocusVisibleMixin
 */
class TrumpImg extends WrappedStandardElement.wrap('img') {

  static get caption() {
    return 'Donald Trump, lying.';
  }

  get [symbols.template]() {
    return template.html`
      <style>
        :host {
        }
        
        #inner {
          width: 100%;
          height: 100%;
        }
      </style>
      <div id="container">
        <img id="inner" alt="${TrumpImg.caption}" title="${TrumpImg.caption}" />
        <p id="caption">
          ${TrumpImg.caption}
        </p>
      </div>
    `;
  }
}

customElements.define('trump-img', TrumpImg);
export default TrumpImg;