import { assign } from 'lodash';

const generateTheme = (fontSizePx = 16, lineHeightPx = 24) => ({
    fontSizePx,
    lineHeightPx,
    font: {
        family: {
            sans: 'Open Sans, sans-serif'
        },
        size: {
            base: fontSizePx,
            sml: Math.round(fontSizePx * 0.875),
            med: fontSizePx,
            lrg: Math.round(fontSizePx * 1.125)
        }
    },
    breakpoint: {
        xxs: '320px',
        xsm: '440px',
        sml: '660px',
        med: '820px',
        lrg: '980px',
        xlr: '1200px'
    },
    rhythm: {
        xxs: lineHeightPx * 0.25,
        xsm: lineHeightPx * 0.5,
        sml: lineHeightPx,
        med: lineHeightPx * 1.5,
        lrg: lineHeightPx * 2,
        xlr: lineHeightPx * 4
    },
    pxToRem(fsPx) {
        return fsPx / fontSizePx;
    }
});

export const defaultTheme = assign({}, generateTheme(), {
    colors: {}
});

export const darkTheme = assign({}, generateTheme(), {
    colors: {}
});
