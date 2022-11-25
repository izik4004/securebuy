// import HeroImg from '../assets/svg/image.svg'
import Shipping from '../assets/category/shipping.png'
import Support from '../assets/category/support.png'
import Refund from '../assets/category/refund.png'
// import Image from '../assets/svg/img1.jpg'

// category images
import Shoes from "../assets/category/6.jpg"
import Fridge from "../assets/category/fridge.jpg"
import Accessories from "../assets/category/accessories.jpg"
import Phone from "../assets/category/phone.jpg"
import Shirt from "../assets/category/shirt.jpg"
import Stationery from "../assets/category/stationery.jpg"



export const header = {
    // logo: LogoImg,
    btnText: 'Connect',
  };

export const nav = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/' },
    // { name: 'Feedback', href: '/' },
  ];

  export const hero = {
    title: 'ARE YOU AFRAID OF GETTING SCAMMED BY ONLINE VENDORS?',
    subtitle: 'Shop securely and never worry about loosing youR money',
    subtitles: '',
    btnText: 'Shop Now',
    compText: '— Web, iOS and Android',
    image: Image,
  };



  export const addedServices = [
    { 
    name: 'FREE SHIPPING', 
    img: Shipping,
    subtitle: 'Lorem Ipsum is simply dummy text '
   },
   { 
    name: '100% REFUND', 
    img: Refund,
    subtitle: 'Lorem Ipsum is simply dummy text '
   },
   { 
    name: 'SUPPORT 24/7', 
    img: Support,
    subtitle: 'Lorem Ipsum is simply dummy text '
   },
  ];

  export const Steps = [
    { 
    name: 'Connect your Wallet', 
    subtitle: 'Lorem Ipsum is simply dummy text '
   },
   { 
    name: 'Purchase', 
    subtitle: 'Add a product to your cart and make payment, payment goes to the escrow account'
   },
   { 
    name: 'Confirm Delivery', 
    subtitle: 'Once delivery is confirmed payment get disbursed to seller and keeps you at risk of loosing money'
   },
  ];

  export const category = [
    { 
    name: 'Shoes', 
    img: Shoes,
   },
   { 
    name: 'Shirt', 
    img: Shirt,
   },
   { 
    name: 'Phone', 
    img: Phone,
   },
   { 
    name: 'Stationery', 
    img: Stationery,
   },
   { 
    name: 'Fridge', 
    img: Fridge,
   },
   { 
    name: 'Accessories', 
    img: Accessories,
   },
  ];

  export const Data = {
    productItems: [
      {
        id: 1,
        discount: 50,
        cover: '../images/flash/flash-1.png',
        name: "Shoes",
        price: 100,
      },
      {
        id: 2,
        discount: 40,
        cover: "../../public/images/flash/flash-2.png",
        name: "Watch",
        price: 20,
      },
      {
        id: 3,
        discount: 40,
        cover: "../../public/images/flash/flash-3.png",
        name: "Smart Mobile Black",
        price: 200,
      },
      {
        id: 4,
        discount: 40,
        cover: "../../public/images/flash/flash-4.png",
        name: "Smart Watch Black",
        price: 50,
      },
      {
        id: 5,
        discount: 50,
        cover: "../../public/images/flash/flash-1.png",
        name: "Shoes",
        price: 100,
      },
      {
        id: 6,
        discount: 50,
        cover: "../../public/images/flash/flash-3.png",
        name: "Shoes",
        price: 100,
      },
    ],
  }

  
  