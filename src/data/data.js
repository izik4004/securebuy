import HeroImg from '../assets/svg/image.svg'
import Shipping from '../assets/svg/shipping.png'
import Support from '../assets/svg/support.png'
import Refund from '../assets/svg/refund.png'
import Image from '../assets/svg/img1.jpg'

// category images
import Shoes from "../assets/svg/6.jpg"
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

  export const product = {
    title: 'Explore by Category',
    subtitle:
      'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.',
    cards: [
      {
        // icon: CardIconImg1,
        title: 'Bedroom',
        btnText: 'Explore',
        delay: 200,
      },
      {
        // icon: CardIconImg1,
        title: 'Gaming',
        btnText: 'Explore',
        delay: 200,
      },
      {
        // icon: CardIconImg1,
        title: 'Health',
        btnText: 'Explore',
        delay: 200,
      },
      {
        // icon: CardIconImg1,
        title: 'Phone & Laptops',
        btnText: 'Explore',
        delay: 200,
      },
      {
        // icon: CardIconImg1,
        title: 'Fashion',
        btnText: 'Explore',
        delay: 200,
      },
      // {
      //   // icon: CardIconImg1,
      //   title: 'Electronics',
      //   btnText: 'Explore',
      //   delay: 200,
      // },
    ],
    items: [
      {
        title: 'All',
        href: '/'
      },
      {
        title: 'Electronics',
        href: '/'
      },
      {
        title: 'Home & Office',
        href: '/'
      },
      {
        title: 'Phones & Laptop',
        href: '/'
      },
      // {
      //   title: 'Gaming',
      //   href: '/'
      // },
      // {
      //   title: 'Health & Beauty',
      //   href: '/'
      // },
      // {
      //   title: 'Other categories',
      //   href: '/'
      // },
    ],
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
  