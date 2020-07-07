import React, { forwardRef, RefObject } from 'react';
import { NavLink } from 'react-router-dom';
import { PseudoBox } from '../PseudoBox';
import { LinkProps } from './types';

const baseStyleProps = {
    transition: `all 0.15s ease-out`,
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    color: 'bodyText',
    _hover: { textDecoration: 'underline' },
    _focus: {
        boxShadow: 'outline',
    },
    _disabled: {
        opacity: '0.4',
        cursor: 'not-allowed',
        textDecoration: 'none',
    },
};

export const Link = forwardRef(({ isDisabled, isExternal, onClick, href, ...rest }: LinkProps, ref: RefObject<any>) => {
    function getHref() {
        if (href && href.indexOf(window?.location.origin) === 0) {
            return href.replace(window?.location.origin, '');
        }
        return href;
    }

    const linkHref = getHref();
    const externalProps =
        isExternal || !linkHref
            ? { as: 'a', href: linkHref, target: '_blank', rel: 'noopener noreferrer' }
            : { as: NavLink, to: linkHref };

    return (
        // @ts-ignore
        <PseudoBox
            ref={ref}
            tabIndex={isDisabled ? -1 : undefined}
            aria-disabled={isDisabled}
            onClick={isDisabled ? event => event.preventDefault() : onClick}
            {...externalProps}
            {...baseStyleProps}
            {...rest}
        />
    );
});
