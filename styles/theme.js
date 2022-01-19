const theme = {
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

theme.spaceXXS = theme.space[1];
theme.spaceXS = theme.space[2];
theme.spaceS = theme.space[3];
theme.spaceM = theme.space[4];
theme.spaceL = theme.space[5];
theme.fontSizeXS = theme.fontSizes[0];
theme.fontSizeS = theme.fontSizes[1];
theme.fontSizeM = theme.fontSizes[2];
theme.fontSizeL = theme.fontSizes[3];
theme.fontSizeXL = theme.fontSizes[4];
theme.fontSizeXXL = theme.fontSizes[4];
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
theme.borderRadiusXS = theme.borderRadii[0];
theme.borderRadiusS = theme.borderRadii[1];
theme.borderRadiusM = theme.borderRadii[2];
theme.borderRadiusL = theme.borderRadii[3];

export default theme