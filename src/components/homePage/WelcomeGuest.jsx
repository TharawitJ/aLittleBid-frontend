import React from 'react'
import blackwatches from '../../assets/blackwatches.jpeg'
import {useNavigate} from "react-router"

function WelcomeGuest() {
  const navigate = useNavigate();
  const hdnNavLogin=()=>{
    navigate("/login")
  }
    const hdnNavRegister=()=>{
    navigate("/register")
  }
  return (
    <div>
         <section className="relative h-[80vh] min-h-[600px] flex items-center px-6 md:px-12 overflow-hidden">
                  <div className="bg-home-bg absolute inset-0 z-0">
                    <img
                      className="w-full h-full object-cover opacity-30"
                      alt="expansive minimalist white gallery room"
                      src={blackwatches}
                    // src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQVBg-wYg4wLdAZPRhtJSW8vEzMsZ-1fMTy7ArmhzD_0YOMGT4ROskeYZ9A9i4MVpRpySJHhvskDZxIHXCJlh_jGQ06HHofICYvNWCJ0OZ9wN5XavhJCAjJYpoKFKeHlakqmeKumGBoPD0gz0CjdebHasEaZIUM99V7Hvf9yN9km1oaTpNfKU4QasmxogHjjcgEmC2slHjEwO7W90MRgbHtpWl1pHscL6fpd2Mw0k7ylemk_qOuuvSxEFVCJOAULWodu7YADiGB-tE" 
                    />
                  </div>
                  <div className="relative z-10 max-w-4xl">
                    <span className="font-label uppercase tracking-[0.2em] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 block font-semibold">Curated Excellence</span>
                    <h1 className="font-headline text-6xl md:text-8xl text-black leading-tight">Join the Thrill</h1>
                    <h1 className="font-headline text-6xl md:text-8xl text-black leading-tight mb-8">of the Bid</h1>
                    <div className="flex gap-4">
                      <button onClick={hdnNavRegister} className="bg-gradient-to-r from-dark-red to-red text-on-primary px-10 py-4 rounded-xl font-label uppercase tracking-widest text-xs hover:shadow-xl transition-all active:scale-95 duration-200">
                        Register
                      </button>
                      <button onClick={hdnNavLogin} className="bg-white border-outline-variant/30 text-on-surface px-10 py-4 rounded-xl font-label uppercase tracking-widest text-xs hover:bg-surface-container-low transition-all active:scale-95 duration-200">
                        Login
                      </button>
                    </div>
                  </div>
                </section>
    </div>
  )
}

export default WelcomeGuest