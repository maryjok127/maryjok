import {useMatches, NavLink} from '@remix-run/react';

const currentYear = new Date().getFullYear();

export function Footer({menu}) {
  function getPath(url_path) {
    let url = new URL(url_path);
    let path = url.pathname;
    return path;
  }

  const viewLinksArr = ["Lips","Face","Eyes"]
  const navigateTo = (url_path)=>{
    let url = getPath(url_path);
    window.location.href = url
  }

  const goToCollection = (url)=>{
    window.location.href = `/collections/${url}`
  }

  const goToPage =(url)=>{
    window.location.href = url
  }

  return (
    <>
      <footer className="mt-8">
        <div className="m-4 p-4">
          <div className="footer-section  text-xl font-semibold border-y-4 py-4">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-1">
            <div className="cursor-pointer"   onClick={()=> goToPage("/") }>Stores</div>
              <div className="cursor-pointer" onClick={()=> goToPage("/pages/terms-conditions") } >Terms & Conditions</div>
              <div className="cursor-pointer" onClick={()=> goToPage("/pages/refund-policy") }>Return & Refund Policy</div>
              <div className="cursor-pointer" onClick={()=> goToPage("/pages/shipping-delivery") }>Shipping & Delivery</div>
              <div className="cursor-pointer" onClick={()=> goToPage("/pages/privacy-policy") }>Privacy Policy</div>
              <div className="cursor-pointer" onClick={()=> goToPage("/pages/terms-conditions") } >FAQs</div>
              <div className="cursor-pointer" onClick={()=> goToPage("/pages/about-us") }>About Us</div>
            </div>
          </div>
          <div className="py-6 footer-contact m-auto">
            <div className="sm:flex gap-4">
              <div className="sm:w-[75%] w-[100%] grid grid-cols-4 gap-4 border-b-mobile footer_shop_brand">
                {
                menu.items.length && menu.items.map((cat,indexx)=>{
                  return(
                    <>
                    { cat.items.length && viewLinksArr.indexOf(cat.title) >= 0  ?
                    <div key={`wrapper_sub_menu_${indexx}`}>
                      <div className='footer_link_title'>{ cat.title }</div>
                      <div>
                        { cat.items.map((subMenu,index)=>{ 
                          return <li key={`sub_menu_${index}`} className='cursor-pointer list-none' onClick={()=> navigateTo(subMenu.url) }>
                            {subMenu.title} 
                          </li>
                        })
                        }
                      </div>
                    </div>
                    : null
                    }
                  </>
                )
              })
            }
            <div>
              <div className='footer_link_title'>Shop by sub-brands</div>
              <li className='cursor-pointer list-none' onClick={()=> goToCollection("pro-studio-mjk") }> Pro Studio </li>
              <li className='cursor-pointer list-none' onClick={()=> goToCollection("way-2-slay-mjk") }> Way 2 Slay </li>
              <li className='cursor-pointer list-none' onClick={()=> goToCollection("rizz-roll-mjk") }> Rizz and Roll </li>
            </div>
          </div>
          
          <div className="sm:w-[25%] w-[100%] cursor-pointer grid">
            <div>
              <h2 className="font-semibold text-xl mt-2 sm:mt-0">GET IN TOUCH</h2>
              {/* <h3 className="mt-4 mb-2 text-md font-semibold">Call us at</h3>
               <a className="mt-2 font-bold text-xl text-[#969696]" href="#">
                +91 9324996122
              </a> */ }
              <p className="mt-2 font-semibold text-[#969696]"> info@maryjok.com </p>
              <p className="mt-2 font-semibold text-[#969696]">
                Monday to Saturday: 10 Am to 7 Pm
              </p>
              <div className='flex mt-4 sm:gap-1'>
                <a className='flex-none w-10 sm:w-14' href="https://www.instagram.com/maryjokofficial/?hl=en"><img src="/insta_icon.png" /> </a>
                <a className='flex-none w-10 sm:w-14' href="https://www.facebook.com/profile.php?id=100064798900233&is_tour_dismissed"><img src="/facebook_icon.png" /> </a>
                <a className='flex-none w-10 sm:w-14' href="https://www.youtube.com/channel/UCPI8xp_XDecCmYh90hCxH3Q"><img src="/youtube_icon.png" /> </a>
              </div>
            </div>
          </div>
          </div>
          <div className='flex justify-center'> <span className='footer_txt sm:border-0 text-center'> © 2024 Maryjo K Cult Makeup | PP Consumer Pvt Ltd. All Rights Reserved </span> </div>
        </div>
        </div>
      </footer>
    </>
  );
}

