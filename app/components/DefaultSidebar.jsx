import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {Form, NavLink, Outlet, useLoaderData} from '@remix-run/react';
 
export function DefaultSidebar({heading}) {
  return (
    <>
    {/*<div className="h-90 overflow-y-auto w-full max-w-[16rem] p-4 shadow-xl shadow-blue-gray-900/5">
<section className="flex font-medium items-center justify-center h-screen">
    <section className="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-1 shadow-lg">
        <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">2d ago</span>
            <span className="text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </span>
        </div>
        <div className="mt-4 w-fit mx-auto">
            <img src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe" className="rounded-full w-28 " alt="profile picture" srcset=""/>
        </div>
        <div className="mt-6 ">
            <h2 className="text-white font-bold text-2xl tracking-wide">{heading}</h2>
        </div>
    </section>
    
</section>
<List>
        <ListItem>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          <a href="/account/order">Orders</a>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <Logout></Logout>
      </List>     
    </div>*/
    }
    <div>
            <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0">

            </div>
            <div className="bg-white"></div>
            <div className="bg-white">
                <div className="flex-col flex">
                    <div className="w-full border-b-2 border-gray-200">
                    </div>
                    <div className="flex bg-gray-100  overflow-x-hidden">
                        <div className="bg-white lg:flex md:w-64 md:flex-col hidden">
                            <div className="flex-col pt-5 flex overflow-y-auto">
                                <div className="h-full flex-col justify-between px-4 flex">
                                    <div className="space-y-4">
                                        <div className="bg-top bg-cover space-y-1">
                                        <section className="w-60 mx-auto bg-[#20354b] rounded-2xl px-8 py-3 shadow-lg">
        <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">2d ago</span>
            <span className="text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </span>
        </div>
        <div className="mt-6 w-fit mx-auto">
            <img src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe" className="rounded-full w-28 " alt="profile picture" srcset=""/>
        </div>
        <div className="mt-8 ">
            <h2 className="text-white font-bold text-2xl tracking-wide">{heading}</h2>
        </div>
    </section>
                                            <a href="/account/order" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                            <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span>Order</span>
                                            </a>
                                            <a href="/account/profile" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                            <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span>Profile</span>
                                            </a>
                                            <a href="/account/addresses" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                            <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span>Address</span>
                                            </a>
                                            <Logout></Logout>
                                        </div>                                      
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>
  );
}
function Logout() {
  return (
    <a href="#" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                            <ListItemPrefix>
      <PowerIcon className="h-5 w-5" />
    </ListItemPrefix>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <Form method="POST" action="/account/logout">
    <button type="submit">Sign out</button>
    </Form>
                                            </a>
  );
}