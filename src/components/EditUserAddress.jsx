import React from 'react'

function EditUserAddress() {
    return (
        <div>
            <form action="">
                <div className="col-span-2 space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Address</label>
                    <br />
                    <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Label</label>
                    <input
                        className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                        type="text"
                        defaultValue=""
                    />
                    <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Street</label>
                    <input
                        className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                        type="text"
                        defaultValue=""
                    />
                    <label className="text-[10px] uppercase tracking-widest text-grey font-bold">City</label>
                    <input
                        className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                        type="text"
                        defaultValue=""
                    />
                    <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Province</label>
                    <input
                        className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                        type="text"
                        defaultValue=""
                    />
                    <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Country</label>
                    <input
                        className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                        type="text"
                        defaultValue=""
                    />
                    <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Postal Code</label>
                    <input
                        className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                        type="text"
                        defaultValue=""
                    />
                </div>
            </form>
        </div>
    )
}

export default EditUserAddress