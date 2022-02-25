const defaultTheme = {
    breakpoints: [ 320, 414, 768, 1024, 1440, 1800 ],
    space: [ 0, 4, 8, 16, 32, 64, 128, 256, 512 ],
    fontSizes: [ 14, 16, 20, 24, 36, 48 ],
    fontFamilies: [ 'Lato' ],
    lineHeights: [ 0.85, 1, 1.2, 1.5, 2 ],
    contentWidths: [ 600, 1260 ],
    colors: [ '#333' ],
    transition: [ '.1s', '.3s', '.6s', '1s'],
    zIndices: {
        loading: 300,
        modal: 250, 
        navigation: 200,
        infoButton: 100,
    },
    borderRadii: [ '2px', '4px', '8px', '16px', '50%' ],
}

defaultTheme.spaceXXS = defaultTheme.space[1];
defaultTheme.spaceXS = defaultTheme.space[2];
defaultTheme.spaceS = defaultTheme.space[3];
defaultTheme.spaceM = defaultTheme.space[4];
defaultTheme.spaceL = defaultTheme.space[5];
defaultTheme.fontSizeXS = defaultTheme.fontSizes[0];
defaultTheme.fontSizeS = defaultTheme.fontSizes[1];
defaultTheme.fontSizeM = defaultTheme.fontSizes[2];
defaultTheme.fontSizeL = defaultTheme.fontSizes[3];
defaultTheme.fontSizeXL = defaultTheme.fontSizes[4];
defaultTheme.fontSizeXXL = defaultTheme.fontSizes[4];
defaultTheme.fontFamilyDefault = defaultTheme.fontFamilies[0];
defaultTheme.breakpointXXL = defaultTheme.breakpoints[5]
defaultTheme.breakpointXL = defaultTheme.breakpoints[4]
defaultTheme.breakpointL = defaultTheme.breakpoints[3]
defaultTheme.breakpointM = defaultTheme.breakpoints[2]
defaultTheme.breakpointS = defaultTheme.breakpoints[1]
defaultTheme.breakpointXS = defaultTheme.breakpoints[0]
defaultTheme.contentWidthL = defaultTheme.contentWidths[1]
defaultTheme.contentWidthS = defaultTheme.contentWidths[0]
defaultTheme.colorBlack = defaultTheme.colors[0]
defaultTheme.borderRadiusXS = defaultTheme.borderRadii[0];
defaultTheme.borderRadiusS = defaultTheme.borderRadii[1];
defaultTheme.borderRadiusM = defaultTheme.borderRadii[2];
defaultTheme.borderRadiusL = defaultTheme.borderRadii[3];

export const baseTheme = {
    ...defaultTheme
}

export const invertedTheme = {
    ...defaultTheme,
    backgroundColor: defaultTheme.colorBlack
}

export default defaultTheme