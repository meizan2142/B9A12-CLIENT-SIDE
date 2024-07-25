import { NavLink } from "react-router-dom";

const MenuItems = ({ label, address }) => {
    return (
        <NavLink
            to={address}
            end
            className={({ isActive }) => isActive ? 'font-bold text-[#26AE61] underline text-base' : 'text-[#26AE61]'}>
            <span>{label}</span>
        </NavLink>
    );
};

export default MenuItems;