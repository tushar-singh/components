import { useTheme } from '../ThemeProvider';

export const textStyle = (props, theme) => ({
    style: {
        fontFamily: 'body',
        fontWeight: 'normal',
        display: 'block',
    },
    kinds: {
        small: {
            fontSize: 'smallBody',
            lineHeight: 'shorter',
        },
        body: {
            fontSize: 'body',
            lineHeight: 'base',
        },
        large: {
            fontSize: 'largeBody',
            lineHeight: 'short',
        },
    },
    state: {
        faint: {
            color: 'faintText',
        },
        emphasis: {
            color: 'titleText',
        },
    },
});

const useTextStyle = props => {
    const theme = useTheme();
    const styles = theme['styles'].text ? theme['styles'].text(props, theme) : textStyle(props, theme);

    return {
        // base style
        ...styles.style,

        ...styles.kinds[props.kind],

        ...styles.state[props.state],
    };
};

export default useTextStyle;
