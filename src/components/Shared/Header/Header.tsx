import Link from 'next/link';

import { HEADER_MENUS } from '@/constants/routes';
import { NavigationMenu } from '@/components/ui/navigation-menu';
import { NavigationMenuList } from '@/components/ui/navigation-menu';
import { NavigationMenuItem } from '@/components/ui/navigation-menu';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

const MenuItems = () => {
    return HEADER_MENUS.map((menu) => (
        <NavigationMenuItem key={menu.link}>
            <NavigationMenuLink
                render={<Link href={menu.link} />}
                className={navigationMenuTriggerStyle()}>
                {menu.label}
            </NavigationMenuLink>
        </NavigationMenuItem>
    ));
};

export function Header() {
    return (
        <header className="shrink-0 py-5">
            <NavigationMenu>
                <NavigationMenuList>
                    <MenuItems />
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
}
