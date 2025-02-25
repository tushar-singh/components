import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Box } from '../Box';
import { transformAliasProps as tx } from '../Box/config';
import { PseudoBoxProps } from './types';

/**
 * The selectors are based on [WAI-ARIA state properties](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties) and common CSS Selectors
 */
const hover = '&:hover';
const active = '&:active, &[data-active=true]';
const focus = '&:focus';
const visited = '&:visited';
const even = '&:nth-of-type(even)';
const odd = '&:nth-of-type(odd)';
const disabled =
    '&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover';
const checked = '&[aria-checked=true]';
const mixed = '&[aria-checked=mixed]';
const selected = '&[aria-selected=true]';
const invalid = '&[aria-invalid=true]';
const pressed = '&[aria-pressed=true]';
const readOnly = '&[aria-readonly=true], &[readonly]';
const first = '&:first-of-type';
const last = '&:last-of-type';
const expanded = '&[aria-expanded=true]';
const grabbed = '&[aria-grabbed=true]';
const notFirst = '&:not(:first-of-type)';
const notLast = '&:not(:last-of-type)';
const groupHover = '[role=group]:hover &';

/**
 * PseudoBox is an interactive wrapper that composes `Box`
 * and converts common CSS pseudo-selectors to props for ease of styling.
 *
 * For example, to style `:hover` use `_hover`
 *
 * @example
 * ```jsx
 * <PseudoBox _hover={...} _focus={...}/>
 * ```
 */
export const PseudoBox = styled(Box)(
    ({
        _after,
        _hoverAfter,
        _focus,
        _selected,
        _focusWithin,
        _hover,
        _invalid,
        _active,
        _disabled,
        _grabbed,
        _pressed,
        _expanded,
        _visited,
        _before,
        _hoverBefore,
        _readOnly,
        _first,
        _notFirst,
        _notLast,
        _last,
        _placeholder,
        _checked,
        _groupHover,
        _mixed,
        _odd,
        _even,
        _scrollbar,
        _track,
        _thumb,
    }: PseudoBoxProps) => {
        return css({
            [hover]: tx(_hover),
            [focus]: tx(_focus),
            [active]: tx(_active),
            [visited]: tx(_visited),
            [disabled]: tx(_disabled),
            [selected]: tx(_selected),
            [invalid]: tx(_invalid),
            [expanded]: tx(_expanded),
            [grabbed]: tx(_grabbed),
            [readOnly]: tx(_readOnly),
            [first]: tx(_first),
            [notFirst]: tx(_notFirst),
            [notLast]: tx(_notLast),
            [last]: tx(_last),
            [odd]: tx(_odd),
            [even]: tx(_even),
            [mixed]: tx(_mixed),
            [checked]: tx(_checked),
            [pressed]: tx(_pressed),
            [groupHover]: tx(_groupHover),
            '&:before': tx(_before),
            '&:hover:before': tx(_hoverBefore),
            '&:after': tx(_after),
            '&:hover:after': tx(_hoverAfter),
            '&:focus-within': tx(_focusWithin),
            '&::placeholder': tx(_placeholder),
            '&::-webkit-scrollbar': tx(_scrollbar),
            '&::-webkit-scrollbar-track': tx(_track),
            '&::-webkit-scrollbar-thumb': tx(_thumb),
        });
    }
);
