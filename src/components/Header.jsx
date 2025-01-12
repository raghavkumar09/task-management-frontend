
import 'remixicon/fonts/remixicon.css'

function Header() {
    return (
        <>
            <div className="header flex justify-between md:justify-around items-center p-3 bg-slate-200 shadow relative">
                <div className="logo flex items-center gap-2">
                    <img className='w-10' src="/repetitive.png" alt="logo" />
                    <span className='text-xl font-bold'>Repetitive</span>
                </div>
                <div className="search hidden md:flex items-center gap-2">
                    <input className='py-2 px-4 rounded-lg outline-none w-96' type="text" placeholder="Search" />
                    <i className="ri-search-line relative right-9"></i>
                </div>
                <div className="icons flex items-center gap-6">
                    <div className="notification">
                        <i className="ri-notification-3-fill text-xl"></i>
                    </div>
                    <div className="profile cursor-pointer">
                        <i className="ri-user-3-fill text-xl"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
