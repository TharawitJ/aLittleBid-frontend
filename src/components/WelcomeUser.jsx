import { Link, NavLink } from 'react-router'
import auction_sold from '../assets/auction_sold.jpeg'
import useUserStore from "../stores/user.store.js";


function WelcomeUser() {
  const { user} = useUserStore();
    return (
        <div>
            <section className="relative h-[80vh] min-h-[600px] flex items-center px-6 md:px-12 overflow-hidden">
                <div className="bg-home-bg absolute inset-0 z-0">
                    <img
                        className="w-full h-full object-cover opacity-30"
                        alt="expansive minimalist white gallery room"
                        src={auction_sold}
                    // src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQVBg-wYg4wLdAZPRhtJSW8vEzMsZ-1fMTy7ArmhzD_0YOMGT4ROskeYZ9A9i4MVpRpySJHhvskDZxIHXCJlh_jGQ06HHofICYvNWCJ0OZ9wN5XavhJCAjJYpoKFKeHlakqmeKumGBoPD0gz0CjdebHasEaZIUM99V7Hvf9yN9km1oaTpNfKU4QasmxogHjjcgEmC2slHjEwO7W90MRgbHtpWl1pHscL6fpd2Mw0k7ylemk_qOuuvSxEFVCJOAULWodu7YADiGB-tE" 
                    />
                </div>
                <div className='flex justify-between items-start gap-70 '>
                     <div className="relative z-10 max-w-4xl ml-10">
                    {/* <span className="font-label uppercase tracking-[0.2em] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 block font-semibold">Curated Excellence</span> */}
                    <h1 className="font-headline text-6xl md:text-8xl text-black leading-tight">Welcome to</h1>
                    <h1 className="font-headline text-6xl md:text-8xl bg-gradient-to-r from-red 80% ) to-black bg-clip-text text-transparent leading-tight mb-4 ml-15">A Little Bid</h1>
                    <p className="font-headline text-2xl md:text-8xl bg-gradient-to-r from-red to-purple bg-clip-text text-transparent leading-tight mb-8 ml-35 uppercase">{user.username}</p>
                </div>
                {/* <div className="flex flex-col gap-10 z-10 items-center m-10">
                    <Link to="/products">
                    <button type="button" className="bg-gradient-to-r from-dark-red to-red text-on-primary px-10 py-4 rounded-xl font-label uppercase tracking-widest text-xs hover:shadow-xl transition-all active:scale-95 duration-200">
                        View All Products
                    </button>
                    </Link>
                    <Link to="/auction">
                    <button type="button" className="bg-gradient-to-r from-dark-red to-red text-on-primary px-10 py-4 rounded-xl font-label uppercase tracking-widest text-xs hover:shadow-xl transition-all active:scale-95 duration-200">
                        Join Auctions
                    </button>
                    </Link>
                </div> */}
                </div>
               
            </section>
        </div>
    )
}

export default WelcomeUser