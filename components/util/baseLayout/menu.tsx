"use client";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Large } from "@/components/util/typography";
import { useTheme } from "next-themes";
import { MdBrightness2, MdBrightness5, MdMenu } from "react-icons/md";

export const Menu = () => {
    const { theme, setTheme } = useTheme();
    return (
        <Sheet>
            <SheetTrigger>
                <MdMenu size={24} />
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-start items-start gap-5">
                <SheetHeader className="pb-5 border-b-[1px] border-border">
                    <SheetTitle className="flex justify-start items-center gap-4">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
                        </Avatar>
                        Test User
                    </SheetTitle>
                    <SheetDescription className="text-left">Currently the only user is a test user. We plan to implement authentication with a Google account sometime in the future.</SheetDescription>
                </SheetHeader>
                <div className="w-full flex flex-col gap-4  pb-5 border-b-[1px] border-border">
                    <div
                        className={`flex gap-5 items-center  bg-transparent curosr-pointer  ${theme === "dark" ? "text-white" : "text-black"}`}
                        onClick={() => {
                            setTheme(theme === "dark" ? "light" : "dark");
                        }}
                    >
                        {theme === "dark" ? <MdBrightness5 size={24} /> : <MdBrightness2 size={24} />}
                        <Large>Change Color</Large>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};
