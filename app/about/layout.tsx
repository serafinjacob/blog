import NavBarLayout from "@/components/Layout";
export default function Layout({ children }: { children: React.ReactNode })
{
    return (
        <main>
            <div>
                {children}
            </div>
        </main>
    );
}
