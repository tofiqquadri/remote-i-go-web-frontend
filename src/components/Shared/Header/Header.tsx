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
        <header className="w-full shrink-0">
    <div className="mx-auto flex max-w-7xl px-16 py-5">
        <NavigationMenu>
            <NavigationMenuList>
                <MenuItems />
            </NavigationMenuList>
        </NavigationMenu>
    </div>
</header>
    );
}
