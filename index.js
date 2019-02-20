/**
 * @file mofron-effect-style/index.js
 * @param style effect for mofron
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
    
    contents (eid, cmp) {
        try {
            let style = this.style()[eid];
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
        try { return this.execConfig('style', 'object', prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    styleIndex (prm, idx) {
        try { return this.execConfig('style', 'object', prm, idx); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
}
module.exports = mofron.effect.Style;
/* end of file */
