import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.div`
    padding: ${props => props.theme.pxToRem(props.theme.rhythm[props.size])}rem 0;
    background: ${props => props.background};
`;

Section.displayName = 'Section';

Section.propTypes = {
    size: PropTypes.string,
    background: PropTypes.string
};

Section.defaultProps = {
    size: 'med',
    background: 'transparent'
};

export default Section;
