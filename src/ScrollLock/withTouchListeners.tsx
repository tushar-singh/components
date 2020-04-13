import { canUseDOM } from 'exenv';
import React, { ComponentType, PureComponent } from 'react';
import { isTouchDevice, listenerOptions, preventTouchMove } from './utils';

type Props = {};

// Mobile Safari ignores { overflow: hidden } declaration on the body,
// so we have to prevent touchmove events via JS
export default function withTouchListeners(WrappedComponent: ComponentType<any>) {
    return class TouchProvider extends PureComponent<Props> {
        componentDidMount() {
            if (!canUseDOM || !isTouchDevice()) return;

            document.addEventListener('touchmove', preventTouchMove, listenerOptions);
        }

        componentWillUnmount() {
            if (!canUseDOM || !isTouchDevice()) return;

            document.removeEventListener('touchmove', preventTouchMove, listenerOptions);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
}
