import React from 'react'

const Btn = ({text}) => {
    return (
        <div className="px-10 pt-16 ">
            <button className="bg-transparent  border-2  border-teal-600 hover:border-teal-600 rounded-none text-teal-400 Raleway-300 tracking-wide h-10 py-1 px-14 button">
                {text}
            </button>
        </div>
    )
}

export default Btn