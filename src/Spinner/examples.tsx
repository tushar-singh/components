/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { Spinner } from '.';
import { ISpinner } from './types';

const stories = storiesOf('Spinner', module);
stories.add('Default', () => (
    <>
        {['xl', 'lg', 'md', 'sm', 'xs'].map((size: ISpinner['size']) => (
            <Spinner m={3} size={size} />
        ))}
    </>
));

stories.add('Color', () => (
    <>
        {['xl', 'lg', 'md', 'sm', 'xs'].map((size: ISpinner['size']) => (
            <Spinner m={3} color="red.500" size={size} />
        ))}
    </>
));
