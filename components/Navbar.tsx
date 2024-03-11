import { getCategoryName } from "@/app/api/sanity/route";
import { authOptions } from "@/lib/authOptions";
import { CategoryNameProps } from "@/types";
import { getServerSession } from "next-auth";
import NavItems from "./NavItems";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  const category: CategoryNameProps[] = await getCategoryName();
  return (
    <header className="sticky top-0 z-40">
      <NavItems category={category} session={session} />
    </header>
  );
}
