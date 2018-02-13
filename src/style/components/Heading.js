import styled from 'styled-components';

// Shared styled div for headings, only meant to be extended
const _Heading = styled.div`
    font-family: ${props => props.theme.font.family.sans};
    color: ${props => props.theme.color.primary};
    line-height: 1.1;
    &:first-child {
        margin-top: 0;
    }
    &:last-child {
        margin-bottom: 0;
    }
`

export const H1 = _Heading.withComponent('h1').extend`
    font-size: 2.5em;
`

export const H2 = _Heading.withComponent('h2').extend`
    font-size: 2em;
`

export const H3 = _Heading.withComponent('h3').extend`
    font-size: 1.7em;
`

export const H4 = _Heading.withComponent('h4').extend`
    font-size: 1.4em;
`

export const H5 = _Heading.withComponent('h5').extend`
    font-size: 1.2em;
`

export const H6 = _Heading.withComponent('h6').extend`
    font-size: 1em;
`