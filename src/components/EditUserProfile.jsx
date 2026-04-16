import React from 'react'

function EditUserProfile() {
    return (
        <div>
            <form action="">
                <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">First Name</label>
                        <input
                            className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                            type="text"
                            defaultValue="Alexander"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Last Name</label>
                        <input
                            className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                            type="text"
                            defaultValue="Sterling"
                        />
                    </div>
                    <div className="col-span-2 space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Username</label>
                        <input
                            className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                            type="text"
                            defaultValue="Sterling"
                        />
                    </div>
                    <div className="col-span-2 space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Email Address</label>
                        <input
                            className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                            type="email"
                            defaultValue="a.sterling@curator.com"
                        />
                    </div>
                    <div className="col-span-2 space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Phone Number</label>
                        <input
                            className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                            type="tel"
                            defaultValue="+44 20 7946 0123"
                        />
                    </div>
                </div>
                <div className='flex justify-between mt-10'>
                    <button type="button" className='text-label bg-gray-400 w-20 py-1 rounded-sm text-white font-label'>Cancle</button>
                    <button className='text-label bg-green-600/80 w-20 py-1 rounded-sm text-white font-label'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default EditUserProfile