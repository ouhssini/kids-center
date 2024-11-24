import { useTheme } from "@/context/theme-provider"
import { Menu, ToggleLeftIcon, X } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function Navbar() {
    const { theme, setTheme } = useTheme()
    const [resolvedTheme, setResolvedTheme] = useState(theme)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        // Resolve the theme when it is set to "system"
        if (theme === "system") {
            const handleSystemThemeChange = () => {
                setResolvedTheme(isSystemDark() ? "dark" : "light")
            }

            handleSystemThemeChange() // Initial check
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .addEventListener("change", handleSystemThemeChange)

            return () =>
                window
                    .matchMedia("(prefers-color-scheme: dark)")
                    .removeEventListener("change", handleSystemThemeChange)
        } else {
            setResolvedTheme(theme)
        }
    }, [theme])

    // Helper to detect system preference
    const isSystemDark = () =>
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches

    const SwitchBtn = () => {
        if (theme === "light") {
            setTheme("dark")
          } else if (theme === "dark") {
            setTheme("system")
          } else {
            setTheme("light")
          }
    }
    return (
        <nav className="w-full h-20 flex items-center">
            <div className="w-[50%] h-full flex items-center justify-center md:justify-start lg:justify-center md:px-5 lg:w-[30%]">
                {resolvedTheme === 'dark' ? <img src="/logo-white.png" className="w-[80%] md:w-[50%]" /> : <img src="/logo.png" className="w-[80%] md:w-[50%]" />}
            </div>
            <ul className="hidden lg:flex w-[70%] h-full items-center justify-center">
                <Tabs className={resolvedTheme === 'dark' ? 'text-white' : 'text-black'} Active>Home</Tabs>
                <Tabs className={resolvedTheme === 'dark' ? 'text-white' : 'text-black'}>About us</Tabs>
                <Tabs className={resolvedTheme === 'dark' ? 'text-white' : 'text-black'}>Courses</Tabs>
                <Tabs className={resolvedTheme === 'dark' ? 'text-white' : 'text-black'}>Events</Tabs>
                <Tabs className={resolvedTheme === 'dark' ? 'text-white' : 'text-black'}>News</Tabs>
                <Tabs className={resolvedTheme === 'dark' ? 'text-white' : 'text-black'}>Teams</Tabs>
                <Tabs className={resolvedTheme === 'dark' ? 'text-white' : 'text-black'}>Pages</Tabs>
                <Tabs className={resolvedTheme === 'dark' ? 'text-white' : 'text-black'}>Contact us</Tabs>
                <ToggleLeftIcon onClick={SwitchBtn} className={resolvedTheme === 'dark' ? 'text-white' : 'text-black'} />
            </ul>
            <div className="w-[50%] h-full flex items-center justify-end px-10 lg:hidden">
                <Menu onClick={() => setIsOpen(!isOpen)} className={resolvedTheme === 'dark' ? 'text-white' : 'text-black'} />
            </div>
            {isOpen && <MobileMenu click={() => setIsOpen(!isOpen)} className={resolvedTheme === 'dark' ? 'bg-slate-800 text-white' : 'bg-white text-black'} />}
        </nav>
    )
}

export default Navbar

const Tabs = ({children, className, Active}: {children: React.ReactNode, className?: string, Active?: boolean}) => {
    return (
        <li className={`h-full w-32 flex font-bold uppercase items-center justify-center ${Active ? 'bg-primary' : ''} cursor-pointer hover:bg-primary transition-all duration-150 ease-in-out ${className}`}>
           {children}
        </li>
    )
}

const MobileTabs = ({children, className, Active}: {children: React.ReactNode, className?: string, Active?: boolean}) => {
    return (
        <li className={`text-xl font-semibold hover:border-b-2 hover:border-primary transition-all duration-200 ease-in-out uppercase ${Active ? 'border-b-2 border-primary' : ''} ${className}`}>
           {children}
        </li>
    )
}
const MobileMenu = ({className, click}: {className?: string, click: () => void}) => {

    return(
        <motion.div 
        initial={{height: 0}}
        animate={{height: '100%'}}
        exit={{height: 0}}
        className={`w-full h-[100dvh] absolute top-0 left-0 ${className} flex flex-col px-10`}>
            <div className="w-full h-28 flex items-center justify-end">
                <X onClick={click} className="cursor-pointer" size={24} />
            </div>
            <ul className="w-full h-[60%] justify-center flex flex-col gap-10">
                <MobileTabs Active>Home</MobileTabs>
                <MobileTabs>About us</MobileTabs>
                <MobileTabs>Courses</MobileTabs>
                <MobileTabs>Events</MobileTabs>
                <MobileTabs>News</MobileTabs>
                <MobileTabs>Teams</MobileTabs>
                <MobileTabs>Pages</MobileTabs>
                <MobileTabs>Contact us</MobileTabs>
            </ul>
        </motion.div>
    )

}