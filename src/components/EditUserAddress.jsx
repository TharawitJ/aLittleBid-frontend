import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { editUserAddressById } from '../api/apiMain';
import Swal from 'sweetalert2'

function EditUserAddress() {
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, reset, watch, setValue, formState } = useForm({
        // resolver: zodResolver(editProfileSchema),
        mode: 'onSubmit',
        // defaultValues: {
            //     firstname: user?.firstname,
            //     lastname: user?.lastname,
            //     username: user?.username,
            //     email: user?.email,
            //     phoneNumber: user?.phoneNumber,
            // }
        })
    const user = useUserStore(state => state.user)
    const userAddress = useUserStore(state => state.userAddress)
    const editUserAddress = useUserStore(state => state.editUserAddress)

    
    const onSubmit = async (data) => {
        console.log('Data', data)
        setIsLoading(true)
        try {
            const resp = await editUserAddress(user.id, userAddress.id, data)
            console.log('resp', resp)
        } catch (error) {
            Swal.fire({
                title: 'Error'
            })
        }
    }

    const hdlCloseModal = () => {
    // reset({
    //   firstname: user.firstname,
    //   lastname: user.lastname,
    //   username: user.username,
    //   email: user.email,
    //   phone: user.phone
    // });
    document.getElementById('openeditaddress-modal').close();
  }

    return (
        <div >
             <div className='text-center mb-10 font-headline uppercase text-dark-red tracking-wider text-2xl'>Edit Address</div>
            <form handleSubmit={onSubmit}>
                <div className='grid grid-cols-2 gap-x-8 gap-y-10'>
                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Label</label>
                        <input
                            className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                            type="text"
                            defaultValue="label"
                            {...register('label')}
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Street</label>
                        <input
                            className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                            type="text"
                            defaultValue="street"
                            {...register('street')}
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">City</label>
                        <input
                            className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                            type="text"
                            defaultValue="city"
                            {...register('city')}
                        />
                    </div>

                    <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">State</label>
                    <input
                        className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                        type="text"
                        defaultValue="state"
                        {...register('state')}
                    />
                    </div>

                    <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Postal Code</label>
                    <input
                        className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                        type="text"
                        defaultValue="10000"
                        {...register('postalCode')}
                    />
                    </div>

                    <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Country</label>
                    <input
                        className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                        type="text"
                        defaultValue="Thailand"
                        {...register('country')}
                    />
                    </div>

                </div>
                 <div className='flex justify-between mt-10'>
                    <button type="button" className='text-label bg-gray-400 w-20 py-1 rounded-sm text-white font-label' onClick={hdlCloseModal}>Cancle</button>
                    <button className='text-label bg-primary w-20 py-1 rounded-sm text-white font-label'>Save</button>
                </div>
            </form >
        </div >
    )
}

export default EditUserAddress