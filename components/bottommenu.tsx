import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactElement;
  isActive: boolean;
  sublinks?: NavItem[];
  isSublinkActive?: boolean;  // New property to check if any sublink is active
}

interface BottomMenuProps {
  links: NavItem[];
  activeColor: string;
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  {
    className?: string;
    title: string;
    isActive: boolean; // Explicitly declare isActive
    href: string;
    children?: React.ReactNode;
  }
>(({ className, title, isActive, href, children }, ref) => {
  return (
    <li>
      <Link href={href} legacyBehavior passHref>
        <a
          ref={ref}
          href={href} // Ensure href is passed correctly
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:underline hover:decoration-wavy hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            isActive ? "bg-accent text-accent-foreground" : "", // Conditional class for active state
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";

const BottomMenu: React.FC<BottomMenuProps> = ({ links, activeColor }) => {
  return (
    <div className="fixed bottom-0 w-full py-3 md:py-5 z-10 bg-primary-foreground border-t dark:border-zinc-800 border-zinc-200 shadow-lg transform duration-500">
      <div className="max-w-screen-xl mx-auto">
        <NavigationMenu className="max-w-screen-xl px-4 mx-auto">
          <NavigationMenuList>
            {links.map((link) => (
              <NavigationMenuItem key={link.href}>
                {link.sublinks ? (
                  <>
                    <NavigationMenuTrigger>
                      <div className={`flex flex-col items-center justify-center ${link.isSublinkActive ? "bg-accent" : ""}`}>
                        <FontAwesomeIcon
                          icon={link.icon.props.icon}
                          size="lg"
                          color={link.isActive || link.isSublinkActive ? activeColor : undefined}
                        />
                        <span>{link.label}</span>
                      </div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul>
                        {link.sublinks.map((sublink) => (
                          <ListItem
                            key={sublink.href}
                            title={sublink.label}
                            href={sublink.href}
                            isActive={sublink.isActive}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <div className="flex flex-col items-center justify-center">
                        <FontAwesomeIcon
                          icon={link.icon.props.icon}
                          size="lg"
                          color={link.isActive ? activeColor : undefined}
                        />
                        <span>{link.label}</span>
                      </div>
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default BottomMenu;
