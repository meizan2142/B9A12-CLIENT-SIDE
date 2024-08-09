import { NavLink, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import toast, { Toaster } from "react-hot-toast";
const roles = [
    { id: 1, role: 'Worker' },
    { id: 2, role: 'TaskCreator' },
    { id: 3, role: 'Admin' }
]
const UpdateRole = () => {
    const [selectedPerson, setSelectedPerson] = useState(roles[0])
    const navigate = useNavigate()
    const location = useLocation()
    const userInfo = useLoaderData([])
    const [user, setUser] = useState(userInfo)
    let newCoin = 0;
    let userCoins = 10;
    if (selectedPerson.role === 'Worker' && userCoins === 10) {
        newCoin = userCoins;
    }
    else if (selectedPerson.role === 'TaskCreator' && userCoins === 10) {
        newCoin += 50;
    }
    else if (selectedPerson.role === 'Admin') {
        newCoin = 0;
    }
    const updated = { selectedPerson, newCoin }
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/newuser/${user.email}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Task Updated Succesfully')
                    navigate(location?.state ? location?.state : '/dashboard/manageusers')
                }
            })
    }, [selectedPerson])
    return (
        <div className="card bg-neutral text-neutral-content lg:w-96">
            <div>
                <Toaster />
            </div>
            <div className="card-body items-center text-center">
                <div className="flex items-center gap-24 mb-5">
                    <h2 className="card-title">Update Role</h2>
                    <NavLink to='/dashboard/manageusers'>
                        <div className="text-xs text-info flex justify-end items-center gap-1 mr-10">
                            <FaLongArrowAltLeft />
                            <p>Back</p>
                        </div>
                    </NavLink>
                </div>
                <div className="card-actions justify-end">
                    <div className='border p-2 rounded-md bg-[#26AE61] text-white'>
                        <div>
                        </div>
                        <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                            <ListboxButton>{selectedPerson.role}</ListboxButton>
                            <ListboxOptions anchor="bottom">
                                {roles.map((person) => (
                                    <ListboxOption key={person.id} value={person} className="data-[focus]:bg-blue-100 text-black font-bold border p-2 mt-2 rounded-md">
                                        {person.role}
                                    </ListboxOption>
                                ))}
                            </ListboxOptions>
                        </Listbox>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateRole;