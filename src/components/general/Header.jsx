import LoginBtn from "../login/LoginBtn.jsx";
import NavBarHeader from "./nav/NavBarHeader.jsx";

export default function Header() {
  return (
    <header className="flex justify-between pt-4">
      <NavBarHeader/>
      <LoginBtn/>
    </header>
  );
}
