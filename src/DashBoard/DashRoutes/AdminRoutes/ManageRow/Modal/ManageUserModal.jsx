import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useEffect, useState } from 'react'

const roles = [
    { id: 1, name: 'Worker' },
    { id: 2, name: 'TaskCreator' },
    { id: 3, name: 'Admin' }
]
const ManageUserModal = () => {
    const [selectedPerson, setSelectedPerson] = useState(roles[0])
    useEffect(() => {
        console.log(selectedPerson.name)
    }, [selectedPerson])
    return (
        <div className='border p-2 rounded-md bg-[#26AE61] text-white'>
            <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                <ListboxButton>{selectedPerson.name}</ListboxButton>
                <ListboxOptions anchor="bottom">
                    {roles.map((person) => (
                        <ListboxOption key={person.id} value={person} className="data-[focus]:bg-blue-100 text-black font-bold border p-2 mt-2 rounded-md">
                            {person.name}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </Listbox>
        </div>
    )


};

export default ManageUserModal;