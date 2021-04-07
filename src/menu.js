const menu = [
  {
    name: 'burrito',
    url: '/image/burrito.png',
    description: 'Your choice of freshly grilled meat or sofritas wrapped in a warm flour tortilla with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese.',
  },
  {
    name: 'burrito bowl',
    url: '/image/bowl.jpeg',
    description: 'Your choice of freshly grilled meat or sofritas served in a delicious bowl with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese.',
  },
  {
    name: 'lifestyle bowl',
    url: '/image/lifestyle.png',
  },
  {
    name: 'quesadilla',
    url: '/image/quesadilla.jpeg',
  },
  {
    name: 'salad',
    url: '/image/salad.jpeg',
    description: 'Your choice of meat or sofritas served with our fresh supergreens lettuce blend made of Romaine, Baby Kale, and Baby Spinach. Add beans, queso blanco, salsa, guacamole, sour cream or cheese and top it off with our signature Chipotle-Honey Vinaigrette.',
  },
  {
    name: 'tacos',
    url: '/image/tacos.jpeg',
    description: 'Your choice of freshly grilled meat or sofritas served in a soft or hard-shell tortilla with guac, salsa, queso blanco, sour cream or cheese, and topped with hand-cut romaine lettuce.',
  },
  {
    name: 'chips & drinks',
    url: '/image/chips-quac.jpeg',
    description: 'Everything else you need to round out your meal.',
  },
  {
    name: 'kids meal',
    url: '/image/kidsmeal.jpeg',
    description: 'Your choice of meat, guacamole or queso, and two toppings to go with a pair of crispy corn or soft flour tortillas. Includes fruit or kid\'s chips and organic juice or milk.',
  },
];
export const products = [
  {
    name: 'burrito bowl',
    url: '/image/bowl.jpeg',
    description: 'Your choice of freshly grilled meat or sofritas served in a delicious bowl with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese.',
    sections: [
      {
        name: 'protein or veggie',
        note: 'Choose up to two.',
        items: [
          {
            id: '001',
            name: 'chicken',
            price: ['9.25', '12.40'],
            cal: '180',
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-6601-chicken/web-mobile/order.png',
            options: [
              {
                name: 'normal',
              },
              {
                name: 'double',
                note: '+$3.15'
              }
            ]
          },
          {
            id: '002',
            name: 'steak',
            price: ['10.35', '14.85'],
            cal: '150',
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-6602-steak/web-mobile/order.png',
            options: [
              {
                name: 'normal',
              },
              {
                name: 'double',
                note: '+$4.50'
              }
            ]
          },
          {
            id: '003',
            name: 'barbacoa',
            price: ['10.35', '14.85'],
            cal: '170',
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-6604-barbacoa/web-mobile/order.png',
            options: [
              {
                name: 'normal',
              },
              {
                name: 'double',
                note: '+$4.50'
              }
            ]
          },
          {
            id: '004',
            name: 'carnitas',
            price: ['9.75', '13.40'],
            cal: '210',
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-6603-carnitas/web-mobile/order.png',
            options: [
              {
                name: 'normal',
              },
              {
                name: 'double',
                note: '+$3.65'
              }
            ]
          },
          {
            id: '005',
            name: 'sofritas',
            price: ['9.25', '12.40'],
            cal: '150',
            description: 'plant-based protein',
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-6605-sofritas/web-mobile/order.png',
            options: [
              {
                name: 'normal',
              },
              {
                name: 'double',
                note: '+$3.15',
              }
            ]
          },
          {
            id: '006',
            name: 'veggie',
            price: ['9.25'],
            cal: '20',
            description: 'includes guacamole',
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5301-guacamole/web-mobile/order.png',
            options: [],
          },
        ]
      },
      // ----------rice-----------
      {
        name: 'rice',
        items: [
          {
            name: 'white rice',
            cal: '210',
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5001-white-rice/web-mobile/order.png',
            options: [
              {
                name: 'normal',
              },
              {
                name: 'light',
              },
              {
                name: 'extra',
              },
              {
                name: 'side',
              },
            ]
          },
          {
            name: 'brown rice',
            cal: '210',
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5002-brown-rice/web-mobile/order.png',
            options: [
              {
                name: 'normal',
              },
              {
                name: 'light',
              },
              {
                name: 'extra',
              },
              {
                name: 'side',
              },
            ]
          },
          {
            name: 'cauliflower rice',
            cal: '40',
            description: 'cilantro-lime',
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-1036-cauliflower-rice/web-desktop/order.png',
            options: [
              {
                name: 'normal',
              },
              {
                name: 'light',
              },
              {
                name: 'extra',
              },
              {
                name: 'side',
              },
            ]
          },
        ]
      },

      // ---------beans---------
      {
        name: 'beans',
        items: [
          {
            name: 'black beans',
            cal: '130',
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5051-black-beans/web-mobile/order.png',
            options: [
              {
                name: 'normal',
              },
              {
                name: 'light',
              },
              {
                name: 'extra',
              },
              {
                name: 'side',
              },
            ]
          },
          {
            name: 'pinto beans',
            cal: '130',
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5052-pinto-beans/web-mobile/order.png',
            options: [
              {
                name: 'normal',
              },
              {
                name: 'light',
              },
              {
                name: 'extra',
              },
              {
                name: 'side',
              },
            ]
          },
        ]
      },
      // ------topping-------------
      {
        name: 'topping',
        items: [
          {
            name: 'guacamole',
            cal: '230',
            price: ['2.70'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5301-guacamole/web-mobile/order.png',
            options: [
              {
                name: 'normal',
              },
              {
                name: 'side',
              },
            ]
          },
          {
            name: 'fresh tomato salsa',
            cal: '25',
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5201-fresh-tomato-salsa/web-mobile/order.png',
            options: [
              {
                name: 'normal',
              },
              {
                name: 'light',
              },
              {
                name: 'extra',
              },
              {
                name: 'side',
              },
            ]
          },
          {
            name: 'roasted chili-corn salsa',
            cal: '80',
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5202-roasted-chili-corn-salsa/web-mobile/order.png',
            options: [
              {
                name: 'normal',
              },
              {
                name: 'light',
              },
              {
                name: 'extra',
              },
              {
                name: 'side',
              },
            ]
          },
          {
            name: 'tomatillo-green chili salsa',
            cal: '15',
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5203-tomatillo-green-chili-salsa/web-mobile/order.png',
            options: [
              {
                name: 'normal',
              },
              {
                name: 'light',
              },
              {
                name: 'extra',
              },
              {
                name: 'side',
              },
            ]
          },
          {
            name: 'tomatillo-red chili salsa',
            cal: '30',
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5204-tomatillo-red-chili-salsa/web-mobile/order.png',
            options: [
              {
                name: 'normal',
              },
              {
                name: 'light',
              },
              {
                name: 'extra',
              },
              {
                name: 'side',
              },
            ]
          },
          {
            name: 'sour cream',
            cal: '110',
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5251-sour-cream/web-mobile/order.png',
            options: [
              {
                name: 'normal',
              },
              {
                name: 'light',
              },
              {
                name: 'extra',
              },
              {
                name: 'side',
              },
            ]
          },
          {
            name: 'fujita veggies',
            cal: '20',
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5101-fajita-veggies/web-mobile/order.png',
            options: [
              {
                name: 'normal',
              },
              {
                name: 'light',
              },
              {
                name: 'extra',
              },
            ]
          },
          {
            name: 'cheese',
            cal: '110',
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5252-monterey-jack-cheese/web-mobile/order.png',
            options: [
              {
                name: 'normal',
              },
              {
                name: 'light',
              },
              {
                name: 'extra',
              },
            ]
          },
          {
            name: 'romaine lettuce',
            cal: '5',
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5351-romaine-lettuce/web-mobile/order.png',
            options: [
              {
                name: 'normal',
              },
              {
                name: 'light',
              },
              {
                name: 'extra',
              },
            ]
          },
          {
            name: 'queso blanco',
            cal: '120',
            price: ['1.40'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-1029-queso-blanco/web-mobile/order.png',
            options: [
              {
                name: 'normal',
              },
              {
                name: 'side',
              },
            ]
          },
        ]
      },
      // ---------options---------
      {
        name: 'options',
        items: [
          {
            name: 'double wrap with tortilla',
            cal: '130',
            price: ['0.25'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5501-flour-tortilla-burrito-size/web-mobile/order.jpg',
            options: [],
          },
        ],
      },
      // --------------side-------------------
      {
        name: 'side',
        items: [
          {
            name: 'chips',
            cal: '540',
            price: ['1.85'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-1002-chips/web-mobile/chips.png',
            options: [],
          },
          {
            name: 'chips & guacamole',
            cal: '770',
            price: ['4.55'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-1003-chips-%26-guacamole/web-desktop/order.png',
            options: [],
          },
          {
            name: 'large chips & large guacamole',
            cal: '1270',
            price: ['7.25'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-1015-large-chips-%26-large-guacamole/web-desktop/order.png',
            options: [],
          },
          {
            name: 'side of guacamole',
            cal: '230',
            price: ['2.70'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-1015-large-chips-%26-large-guacamole/web-desktop/order.png',
            options: [],
          },
        ],
      },

    ],

  }
]
export default menu;
