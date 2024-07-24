import { GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
const ManageTask = () => {

    return (
        <div className="lg:mr-20">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Task Title</th>
                            <th>TaskCreator Name</th>
                            <th>Task Count</th>
                            <th>Coin Needed</th>
                            <th>Availability</th>
                            <th>View Task</th>
                            <th>Delete Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td>
                                <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}><GrView className="w-5 h-5" /></button>
                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                    </div>
                                </dialog>
                            </td>
                            <td><MdDelete className="w-5 h-5" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageTask;