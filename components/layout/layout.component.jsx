import MetaComponent from '../meta/meta.component';
import NavigationComponent from '../navigation/navigation.component';
import FooterComponent from '../footer/footer.component';

const LayoutComponent = ({ children, hasNavigation = true, hasFooter = true }) => {
    return (
        <>
            <MetaComponent/>
            { hasNavigation &&
                <NavigationComponent/>
            }
            <main>
                { children }
            </main>
            { hasFooter &&
                <FooterComponent />
            }
        </>
    )
}

export default LayoutComponent
