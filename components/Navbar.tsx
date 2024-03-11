import { authOptions } from "@/lib/authOptions";
import { CategoryNameProps } from "@/types";
import { getServerSession } from "next-auth";
import NavItems from "./NavItems";
import { client } from "@/lib/sanity";

async function getCategoryName() {
  const query = `*[_type == "category"]`;

  const data = await client.fetch(query);

  return data;
}

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  const category: CategoryNameProps[] = await getCategoryName();
  return (
    <header className="sticky top-0 z-40">
      <NavItems category={category} session={session} />
    </header>
  );
}
