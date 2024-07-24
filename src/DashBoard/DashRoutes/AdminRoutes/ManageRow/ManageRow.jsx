import { MdDelete } from "react-icons/md";
import ManageUserModal from "./Modal/ManageUserModal";

const ManageRow = ({ worker }) => {
    const { displayURL, name, email, role, coins } = worker
    return (
        <tr>
            <td></td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={displayURL}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>{email}</td>
            <td>{role}</td>
            <td>{coins}</td>
            <th>
                <ManageUserModal/>
            </th>
            <td><MdDelete className="w-5 h-5" /></td>
        </tr>
    );
};

export default ManageRow;