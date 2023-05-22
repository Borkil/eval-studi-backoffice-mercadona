import { SectionHeader } from "@/components/general/section/SectionHeader.jsx";
import SectionLayout from "@/components/general/section/SectionLayout.jsx";
import ListUser from "@/components/user/ListUser.jsx";

export default function Index() {
  return (
    <SectionLayout>
      <SectionHeader
        title={"Gestion des utilisateurs"}
        href={"/utilisateur/ajouter"}
      />
      <ListUser />
    </SectionLayout>
  );
}
