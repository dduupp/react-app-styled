import styled from 'styled-components';
import PropTypes from 'prop-types';

const Spacer = styled.div`
    & + & {
        margin-top: ${props => props.theme.pxToRem(props.theme.rhythm[props.size])}rem;
    }
`;

Spacer.propTypes = {
    size: PropTypes.string
};

Spacer.defaultProps = {
    size: 'sml'
};

export default Spacer;