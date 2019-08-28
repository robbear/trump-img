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

  static get placeholderText() {
    return 'Analyzing photo with AI engine...';
  }

  get defaultState() {
    const state = Object.assign(super.defaultState, {
      src: null
    });

    return state;
  }

  get src() {
    return this.state.src;
  }
  set src(src) {
    console.log('src setter');
    this.setState({src});
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

        p {
          margin-top: .75 em;
          font-size: smaller;
        }
      </style>
      <div id="container">
        <img id="inner" alt="${TrumpImg.caption}" title="${TrumpImg.caption}" />
        <p id="caption"></p>
      </div>
    `;
  }

  [symbols.render](changed) {
    super[symbols.render](changed);

    if (changed.src) {
      console.log('In changed.src');
      this.$.inner.src = this.src;
      this.$.caption.textContent = TrumpImg.placeholderText;
      setTimeout(() => {
        this.$.caption.textContent = TrumpImg.caption;
      }, 2000);
    }
  }
}

customElements.define('trump-img', TrumpImg);
export default TrumpImg;