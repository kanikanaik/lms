import SideNav from "../components/SideNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main className="bg-neutral-100">
        <SideNav />
        <main className="px-24">{children}</main>
      </main>
    </div>
  );
}
