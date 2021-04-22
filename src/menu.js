
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
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5301-guacamole/web-mobile/order.png',
            options: [],
          },
          {
            name: 'tortilla on the side',
            cal: '320',
            price: ['0.25'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5501-flour-tortilla-burrito-size/web-mobile/order.jpg',
            options: [],
          },
          {
            name: 'chips & fresh tomato salsa',
            cal: '570',
            price: ['2.45'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-1005-chips-%26-salsa/web-mobile/order.png',
            options: [],
          },
          {
            name: 'chips & tomatillo-red chili salsa',
            cal: '570',
            price: ['2.45'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-1007-chips-&-tomatillo-red-chili-salsa/web-mobile/order.png',
            options: [],
          },
          {
            name: 'chips & tomatillo-green chili salsa',
            cal: '560',
            price: ['2.45'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-1006-chips-and-tomatillo-green-chili-salsa/web-mobile/order.png',
            options: [],
          },
          {
            name: 'chips & roasted chili-corn salsa',
            cal: '620',
            price: ['2.45'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-1008-chips-%26-roasted-chili-corn-salsa/web-mobile/order.png',
            options: [],
          },
          {
            name: 'queso blanco',
            cal: '240',
            price: ['2.70'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-1029-queso-blanco/web-mobile/order.png',
            options: [],
          },
          {
            name: 'large chips & large queso blanco',
            cal: '1290',
            price: ['7.25'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-1033-large-chips-%26-large-queso-blanco/web-mobile/order.png',
            options: [],
          },
          {
            name: 'chips & queso blanco',
            cal: '780',
            price: ['4.55'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-1032-chips-&-queso-blanco/web-mobile/order.png',
            options: [],
          },
        ],
      },
      // --------------drinks---------
      {
        name: 'drinks',
        items: [
          {
            name: 'organic lemonade',
            cal: '110 - 220',
            price: ['2.75', '3.05'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-ftn-organic-lemonade/web-desktop/order.png',
            options: [
              {
                name: '32 FL OZ',
                note: ' - $3.05',
              },
              {
                name: '22 FL OZ',
                note: ' - $2.75',
              },
            ]
          },
          {
            name: 'organic hibiscus lemonade',
            cal: '110 - 220',
            price: ['2.75', '3.05'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-ftn-hibiscus-lemonade/web-desktop/order.png',
            options: [
              {
                name: '32 FL OZ',
                note: ' - $3.05',
              },
              {
                name: '22 FL OZ',
                note: ' - $2.75',
              },
            ]
          },
          {
            name: 'organic mandarin agua fresca',
            cal: '110 - 220',
            price: ['2.75', '3.05'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-ftn-mandarin-agua-fresca/web-desktop/order.png',
            options: [
              {
                name: '32 FL OZ',
                note: ' - $3.05',
              },
              {
                name: '22 FL OZ',
                note: ' - $2.75',
              },
            ]
          },
          {
            name: 'organic berry agua fresca',
            cal: '110 - 220',
            price: ['2.75', '3.05'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-ftn-berry-agua-fresca/web-desktop/order.png',
            options: [
              {
                name: '32 FL OZ',
                note: ' - $3.05',
              },
              {
                name: '22 FL OZ',
                note: ' - $2.75',
              },
            ]
          },
          {
            name: 'fountain drink',
            description: 'soda and iced tea',
            cal: '0 - 300',
            price: ['2.75', '3.05'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-1019-small-drink/web-desktop/order.png',
            options: [
              {
                name: '32 FL OZ',
                note: ' - $3.05',
              },
              {
                name: '22 FL OZ',
                note: ' - $2.75',
              },
            ]
          },
          {
            name: 'mexican coca-cola',
            cal: '150',
            price: ['2.75'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-2810-mexican-coca-cola/web-desktop/order.png',
            options: []
          },
          {
            name: 'tractor organic black tea',
            cal: '30',
            price: ['3.45'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-2837-tractor-organic-black-tea/web-desktop/order.png',
            options: []
          },
          {
            name: 'tractor organic lemonade',
            cal: '140',
            price: ['3.45'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-2838-tractor-organic-lemonade/web-desktop/order.png',
            options: []
          },
          {
            name: 'san pellegrino sparkling',
            cal: '0',
            price: ['3.00'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-2805-san-pellegrino-sparkling-water/web-desktop/order.png',
            options: []
          },
          {
            name: 'blackberry izze',
            cal: '220',
            price: ['2.75'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-2051-blackberry-izze/web-desktop/order.png',
            options: []
          },
          {
            name: 'bottled water',
            cal: '0',
            price: ['2.85'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-2201-bottled-water/web-desktop/order.png',
            options: []
          },
          {
            name: 'pressed apple juice',
            cal: '240',
            price: ['3.20'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-2101-nantuckets-nectar-pressed-apple-juice/web-desktop/order.png',
            options: []
          },
          {
            name: 'peach orange juice',
            cal: '220',
            price: ['3.20'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-2103-peach-orange-juice/web-desktop/order.png',
            options: []
          },
          {
            name: 'pineapple orange banana juice',
            cal: '280',
            price: ['3.20'],
            img: 'https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-2102-pineapple-banana-orange-juice/web-desktop/order.png',
            options: []
          },


        ],
      }, /* -----end drinks------- */
    ],/* -----end section------- */
  }, /* -----end product------- */
]

