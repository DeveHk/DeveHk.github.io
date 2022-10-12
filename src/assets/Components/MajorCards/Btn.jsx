import React from 'react'

const Btn = ({text}) => {
    return (
        <div className=" pt-10 lg:pt-5">
            <button className="bg-transparent  border-1   border-teal-600 hover:border-teal-600
            rounded-none text-teal-400 Raleway-300 tracking-wide h-[50px] py-1 px-10 min-w-[200px] button">
                {text}
            </button>
        </div>
    )
}

export default Btn