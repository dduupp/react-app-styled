import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './style/theme';

import Section from './style/components/Section';
import Container from './style/components/Container';

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={defaultTheme}>
                <Section size={'lrg'}>
                    <Container>
                        Hello world!
                    </Container>
                </Section>
            </ThemeProvider>
        );
    }
}

export default App;