
export const LINKS = [
    {name: 'Zinda Shah Madar', to: '/',
     subMenu: true,
     sub_LINKS: [
      { name:'Introduction', to:'/introduction', },
      { name: 'Shajra', to:'/shajra', },
      { name: 'Alqabaat', to:'/alqabat', },
      { name: 'Books', to: '/books',},
      { name: 'Miracles', to: '/miracles',},
     ]
    },
    {name: 'Khadim Sajjada Nashin', to: '/',
    subMenu: true,
    sub_LINKS: [
     { name: 'Syed Mujibul Baqi', to:'/', },
     { name: 'Syed Misbahul Murad', to:'/', },
     { name: 'Syed Faizul Murad', to:'/', },
    ]},
    {name: 'Sufism', to: '/',  },
    {name: 'Contribution', to: '/'},
    {name: 'About', to: '/'},
  ];
export const MOBILE_LINKS = [{name: 'Adeeb', to: '/'}, ...LINKS]  