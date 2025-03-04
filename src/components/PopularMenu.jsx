import Menu from '../useComponents/Menu';
import SectionTitle from '../useComponents/SectionTitle';
import useMenu from '../useComponents/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu()
    const popularMenu = menu.filter((item) => item.category === 'popular')

    return (
        <div>
            <SectionTitle title={"FROM OUR MENU"} subTitle={"---Check it out---"}></SectionTitle>
            <Menu menu={popularMenu}></Menu>
        </div>

    );
};

export default PopularMenu;