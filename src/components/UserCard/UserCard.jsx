import React from 'react'
import Image from 'next/image'


function UserCard({ name, title, description, key }) {
    return (
        <div className="max-w-xs" key={key}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Image */}
                <div className="flex justify-center"> {/* Flexbox container for centering */}
                    <Image src="" alt="Profile image" height={180} width={180} className="rounded-full shadow-md" />
                </div>
                {/* Content */}
                <div className="p-4">
                    {/* Name */}
                    <h2 className="text-lg font-semibold mb-2">{name}</h2>

                    {/* Title */}
                    <h3 className="text-gray-600 mb-2">{title}</h3>

                    {/* Description */}
                    <p className="text-gray-700 text-sm">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UserCard