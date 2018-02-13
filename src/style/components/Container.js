import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    width: ${props => props.width}px;
    margin: 0 auto;
`;

Container.displayName = 'Container';

Container.propTypes = {
    width: PropTypes.number
};

Container.defaultProps = {
    width: 1200
};

export default Container;
