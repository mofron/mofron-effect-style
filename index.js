/**
 * @file mofron-effect-style/index.js
 * @param scale effect for mofron
 * @author simpart
 */
const mf = require('mofron');

mf.effect.Style = class extends mofron.Effect {
    
    constructor (po) {
        try {
            super();
            this.name('Style');
            this.prmMap('style');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (cmp) {
        try {
            let style = this.style();
            if ((null === style) || (undefined === style)) {
                return;
            }
            cmp.adom().style(style);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    style (prm) {
        try { return this.member('style', 'object', prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Style;
/* end of file */
