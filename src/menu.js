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
    name: 'burrito',
    items: [
      {
        name: 'chicken',
        price: ['9.25', '12.40'],
        cal: '180',
        option: [
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
        name: 'steak',
        price: ['10.35', '14.85'],
        cal: '150',
        option: [
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
        name: 'barbacoa',
        price: ['10.35', '14.85'],
        cal: '170',
        option: [
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
        name: 'carnitas',
        price: ['9.75', '13.40'],
        cal: '210',
        option: [
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
        name: 'sofritas',
        price: ['9.25', '12.40'],
        cal: '150',
        description: 'plant-based protein',
        option: [
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
        name: 'veggie',
        price: ['9.25'],
        cal: '20',
        description: 'plant-based protein',
        option: [],
      },
    ]
  }
]
export default menu;
