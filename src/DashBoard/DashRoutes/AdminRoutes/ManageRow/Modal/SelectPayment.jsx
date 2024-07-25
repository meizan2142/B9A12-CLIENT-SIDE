import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { useEffect, useState } from "react";

const roles = [
    { id: 1, name: 'Bkash' },
    { id: 2, name: 'Rocket' },
    { id: 3, name: 'Nagad' }
]
const SelectPayment = () => {
    const [selectedPayment, setSelectedPayment] = useState(roles[0])
    useEffect(() => {
        console.log(selectedPayment.name)
    }, [selectedPayment])
    return (
        <div>
            <div className='border p-2 rounded-md bg-[#26AE61] text-white'>
                <Listbox value={selectedPayment} onChange={setSelectedPayment}>
                    <ListboxButton>{selectedPayment.name}</ListboxButton>
                    <ListboxOptions anchor="bottom">
                        {roles.map((Payment) => (
                            <ListboxOption key={Payment.id} value={Payment} className="data-[focus]:bg-blue-100 text-black font-bold border p-2 mt-2 rounded-md">
                                {Payment.name}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </Listbox>
            </div>
        </div>
    );
};

export default SelectPayment;