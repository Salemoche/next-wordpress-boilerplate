const theme = {
    breakpoints: [ 320, 414, 768, 1024, 1440, 1800 ],
    breakpointXXL: 0,
    breakpointXL: 0,
    breakpointL: 0,
    breakpointM: 0,
    breakpointS: 0,
    breakpointXS: 0,
    space: [ 0, 4, 8, 16, 32, 64, 128, 256, 512 ],
    spaceXXS: 0,
    spaceXS: 0,
    spaceS: 0,
    spaceM: 0,
    spaceL: 0,
    fontSizes: [ 14, 16, 20, 24, 36, 48 ],
    fontSizeS: 0,
    fontSizeM: 0,
    fontSizeL: 0,
    fontSizeXL: 0,
    fontFamilies: [ 'Lato' ],
    fontFamilyDefault: '',
    lineHeights: [ 0.85, 1, 1.2, 1.5, 2 ],
    contentWidths: [ 600, 1260 ],
    contentWidthL: 0,
    contentWidthS: 0,
    colors: [ '#333' ],
    colorBlack: '',
    transition: [ '.1s', '.3s', '.6s', '1s'],
    zIndices: {
        loading: 300,
        navigation: 200,
        infoButton: 100,
        drop: 5,
    }
}

theme.spaceXXS = theme.space[1];
theme.spaceXS = theme.space[2];
theme.spaceS = theme.space[3];
theme.spaceM = theme.space[4];
theme.spaceL = theme.space[5];
theme.fontSizeS = theme.fontSizes[0];
theme.fontSizeM = theme.fontSizes[1];
theme.fontSizeL = theme.fontSizes[2];
theme.fontSizeXL = theme.fontSizes[3];
theme.fontFamilyDefault = theme.fontFamilies[0];
theme.breakpointXXL = theme.breakpoints[5]
theme.breakpointXL = theme.breakpoints[4]
theme.breakpointL = theme.breakpoints[3]
theme.breakpointM = theme.breakpoints[2]
theme.breakpointS = theme.breakpoints[1]
theme.breakpointXS = theme.breakpoints[0]
theme.contentWidthL = theme.contentWidths[1]
theme.contentWidthS = theme.contentWidths[0]
theme.colorBlack = theme.colors[0]

export default theme