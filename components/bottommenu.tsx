import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "./ui/navigation-menu"; // Adjust the import path if necessary
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarWeek, faFileCircleInfo, faFolderClosed, faHome } from "@fortawesome/pro-solid-svg-icons";

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactElement;
  isActive: boolean;
  sublinks?: NavItem[];
}

interface BottomMenuProps {
  links: NavItem[];
  activeColor: string;
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const BottomMenu: React.FC<BottomMenuProps> = ({ links, activeColor }) => {
  return (
    <div className="fixed bottom-0 w-full py-3 md:py-5 z-10 bg-primary-foreground border-t dark:border-zinc-800 border-zinc-200 shadow-lg transform duration-500">
      <div className="max-w-screen-xl mx-auto ">
        <NavigationMenu className="max-w-screen-xl px-4 mx-auto">
          <NavigationMenuList className=" ">
            
            <NavigationMenuItem >
              <Link
                href="/chem-home"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <div className="flex flex-col items-center justify-center w-">
                    <FontAwesomeIcon icon={faHome} size="lg" color="#DA4453" />
                    <span>Home</span>
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="">
              <NavigationMenuTrigger className="">
              <div className="flex flex-col items-center justify-center">
                  <FontAwesomeIcon icon={faCalendarWeek} size="lg" />
                    <span>Schedule</span>
                  </div>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul>
                  <ListItem
                    title="Regular Schedule"
                    href="/chem-schedule/regular"
                    >
        
                  </ListItem>
                  <ListItem
                  title="Honors Schedule"
                  href="/chem-schedule/honors">
        
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link
                href="/chem-info"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <div className="flex flex-col items-center justify-center">
                <FontAwesomeIcon icon={faFileCircleInfo} size="lg" />
                    <span>Info</span>
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/chem-handouts"
                legacyBehavior
                passHref
        
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <div className="flex flex-col items-center justify-center">
                  <FontAwesomeIcon icon={faFolderClosed} size="lg" />
                    <span>Handouts</span>
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default BottomMenu;
