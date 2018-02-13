import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.p`
    font-size: ${props => props.theme.pxToRem(props.theme.font.size[props.size])}rem;
`;

Text.propTypes = {
    size: PropTypes.string
};

Text.defaultProps = {
    size: 'base'
};

export default Text;