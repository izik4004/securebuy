import HeroImg from '../assets/svg/image.svg'
import Shipping from '../assets/svg/shipping.png'
import Support from '../assets/svg/support.png'
import Refund from '../assets/svg/refund.png'

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
    title: 'Tired of getting scammed?',
    subtitle: 'Helps you to organize your income and expenses',
    subtitles: '',
    btnText: 'Shop Now',
    compText: '— Web, iOS and Android',
    image: HeroImg,
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

  