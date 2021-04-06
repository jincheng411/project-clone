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
    ],

  }
]
export default menu;
