const express = require("express");
const app = express();
const port = 8000;

const shoesData = [
  {
    _id: 1001,
    title: "adidas Men's Kaptir 2.0 Running Shoe",
    image: "https://i.ibb.co/PYCF50F/71-WSz-VZ-M9-L-AC-UX575.jpg",
    description:
      "Roll through your day in total comfort in these men's adidas running-inspired shoes. They feature a Cloudfoam midsole that's pillow soft. The knit upper provides a snug and secure fit.",
    price: 185,
    oldPrice: 200,
    isNew: true,
    category: "Mens",
    brand: "addidas",
    sliderImg: [
      {
        _id: 1,
        image: "https://i.ibb.co/Gxs2qGW/1.jpg",
      },
      {
        _id: 2,
        image:
          "https://i.ibb.co/zGF7QqD/81-Knf-Os2vy-L-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 3,
        image:
          "https://i.ibb.co/T4swRMR/812-JDt-AXnn-L-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 4,
        image:
          "https://i.ibb.co/smrKB8X/81b-H3za0-AWL-AC-SX575-SX-UX-SY-UY.jpg",
      },
    ],
  },
  {
    _id: 1002,
    title: "Skechers Men's Afterburn Memory-Foam Lace-up Sneaker",
    image: "https://i.ibb.co/MDCpzcV/81d5u6z-G-EL-AC-UX575.jpg",
    description:
      "Smooth leather, synthetic and mesh fabric upper in a sporty training sneaker with perforated details, stitching and overlay accents. Padded collar and tongue, fabric lining, Memory Foam insole, Articu-Lyte rubber sole and a flexible, high-traction rubber sole.",
    price: 105,
    oldPrice: 150,
    isNew: true,
    category: "Mens",
    brand: "Skechers",
    sliderImg: [
      {
        _id: 1,
        image:
          "https://i.ibb.co/VYyVzkb/71u-B3081c-DL-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 2,
        image:
          "https://i.ibb.co/Qvv1wvZ/81y-Hd-YRfb-LL-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 3,
        image:
          "https://i.ibb.co/YWgVN7b/81iv-Ys9jxt-L-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 4,
        image:
          "https://i.ibb.co/W2TT2ym/81-j-F2-IDGk-L-AC-SX575-SX-UX-SY-UY.jpg",
      },
    ],
  },
  {
    _id: 1003,
    title: "Under Armour Men's Charged Assert 9 Running Shoe",
    image: "https://i.ibb.co/kGm3JgB/51-Pg-LKADR9-L-AC-UY575.jpg",
    description:
      "These running shoes are built to help anyone go faster-Charged Cushioning® helps protect against impact, leather overlays add durable stability, and a mesh upper keeps your feet cool for miles.",
    price: 150,
    oldPrice: 250,
    isNew: false,
    category: "Womens",
    brand: "Under Armour",
    sliderImg: [
      {
        _id: 1,
        image:
          "https://i.ibb.co/XYjfY9r/711-Chkhpe-SL-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 2,
        image: "https://i.ibb.co/mqmbqPV/81dig3enl-HL-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 3,
        image:
          "https://i.ibb.co/nb2b0Vm/71-ZJu-IBhh-AL-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 4,
        image:
          "https://i.ibb.co/Fn3BRB4/51-HOu-JHQy-AL-AC-SY575-SX-UX-SY-UY.jpg",
      },
    ],
  },
  {
    _id: 1004,
    title: "Columbia Men's Bahama Vent PFG Boat Shoe",
    image: "https://i.ibb.co/dPvFR8w/71ub1-Die-No-L-AC-UX575.jpg",
    description:
      "Happy feet make happy days—that's why we designed this waterproof shoe with expert craftsmanship. The Columbia Bahama Vent PFG Boat Shoe Wide is the ultimate companion for rigorous day out on the water. High quality materials are first and foremost on Columbia's list of requirements when designing and creating men's footwear.",
    price: 280,
    oldPrice: 350,
    isNew: true,
    category: "Mens",
    brand: "Columbia",
    sliderImg: [
      {
        _id: 1,
        image:
          "https://i.ibb.co/KzbhyFP/71-Q1gd-Wtbo-L-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 2,
        image:
          "https://i.ibb.co/HK4rFcL/61-VXh5-JCFCL-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 3,
        image:
          "https://i.ibb.co/2MnP0QN/61-Llj-K9-WLv-L-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 4,
        image:
          "https://i.ibb.co/vQjz6d2/714-Ho-YIVw-VL-AC-SX575-SX-UX-SY-UY.jpg",
      },
    ],
  },
  {
    _id: 1005,
    title: "New Balance Men's Fresh Foam 680 V7 Running Shoe",
    image: "https://i.ibb.co/342JBsf/81d-j-Vzmo-TL-AC-UX575.jpg",
    description:
      "Fashionable with an amazing fit, the men's New Balance FreshFoam 680v7 is ideal for those entering the world of running. With features including a dual-density Fresh Foam midsole for comfort, molded insert for support, smooth engineered air mesh for breathability, and optimal rubber coverage for durability, this shoe provides a soft feel and reliable performance with every step you take.",
    price: 140,
    oldPrice: 220,
    isNew: false,
    category: "Mens",
    brand: "New Balance",
    sliderImg: [
      {
        _id: 1,
        image:
          "https://i.ibb.co/t8CVhz2/819-Arz34nv-L-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 2,
        image: "https://i.ibb.co/kHRTGYh/81x3prh5tw-L-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 3,
        image:
          "https://i.ibb.co/cXZTv3q/81-C6d-Od3-E6-L-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 4,
        image:
          "https://i.ibb.co/Hhq1ytN/81-Kt5k-WDjd-L-AC-SX575-SX-UX-SY-UY.jpg",
      },
    ],
  },
  {
    _id: 1006,
    title: "Skechers Men's Moreno Canvas Oxford Shoe",
    image: "https://i.ibb.co/41MVdVC/91-Cur-XTes-TL-AC-UX575.jpg",
    description:
      "Lace Up Canvas, leather overlays add durable stability, and a mesh upper keeps your feet cool for miles.",
    price: 130,
    oldPrice: 200,
    isNew: false,
    category: "Mens",
    brand: "Skechers",
    sliderImg: [
      {
        _id: 1,
        image:
          "https://i.ibb.co/kDZ58Vh/81-Jws0-Qr-Y-L-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 2,
        image:
          "https://i.ibb.co/pdLnHBc/71-pj-Ws-R51-L-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 3,
        image:
          "https://i.ibb.co/mGZGpY9/71ocg-I9w-Oi-L-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 4,
        image: "https://i.ibb.co/qkqKST0/81voqeze-HGL-AC-SX575-SX-UX-SY-UY.jpg",
      },
    ],
  },
  {
    _id: 1007,
    title: "Cole Haan Men's Zerogrand Overtake All-Terrain Runner Ii",
    image: "https://i.ibb.co/DQvMRvt/71-Kq-U26u-BJL-AC-UX695.jpg",
    description:
      "Enhanced Breathability: The ripstop textile and mesh tongue enhances fit and control while keeping your shoe debris free. ​Plush Grand360 Foam midsole provides lasting comfort throughout the run. Water resistant upper with TPU overlay details. Fulllength, marbled rubber traction provides stability on the trails.",
    price: 250,
    oldPrice: 280,
    isNew: true,
    category: "Mens",
    brand: "Cole Haan",
    sliderImg: [
      {
        _id: 1,
        image:
          "https://i.ibb.co/dGZ5k8y/71t-MSw0u9x-L-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 2,
        image:
          "https://i.ibb.co/Wvcdfdy/71-Ut9-FPzb-CL-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 3,
        image:
          "https://i.ibb.co/S76ZF7v/71c-KQN-DOa-L-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 4,
        image:
          "https://i.ibb.co/6D02Cw5/71-SUQb3d-MQL-AC-SX575-SX-UX-SY-UY.jpg",
      },
    ],
  },
  {
    _id: 1008,
    title: "adidas mens Tech Response Spikeless",
    image: "https://i.ibb.co/LgjwBJg/71-PTIC7-PVCL-AC-UX575.jpg",
    description:
      "The New adidas Men's Tech Response Spikeless Golf Shoe offers a lightweight mesh and microfiber upper to provide enhanced breathability, while the soft EVA insoles bring a lightweight feel with added cushioning for unmatched comfort. The Tech Response from adidas golf has a spikeless design that allows you to go from the car to the tee and into the clubhouse without changing your shoes. Microfiber/Mesh upper construction is lightweight, breathable, and comfortable.",
    price: 130,
    oldPrice: 180,
    isNew: false,
    category: "Mens",
    brand: "adidas",
    sliderImg: [
      {
        _id: 1,
        image:
          "https://i.ibb.co/X8VfX7J/71m-c-T8-R3-BL-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 2,
        image:
          "https://i.ibb.co/2jYJ6JL/71ts-Ou2-8-PL-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 3,
        image:
          "https://i.ibb.co/60SjV4b/818b-Hn-D6-F8-L-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 4,
        image:
          "https://i.ibb.co/X8VfX7J/71m-c-T8-R3-BL-AC-SX575-SX-UX-SY-UY.jpg",
      },
    ],
  },
  {
    _id: 1009,
    title: "Aqua Sphere Sporter Water Shoes",
    image: "https://i.ibb.co/Hh4Mk9S/71-LGm73h2j-L-AC-UX575.jpg",
    description:
      "Benefits: FAST DRYING. Thanks to mesh inserts and purge valve on the heel - HIGH STABILITY AND GRIP : thanks to the TPR sole and special design.",
    price: 60,
    oldPrice: 80,
    isNew: false,
    category: "Mens",
    brand: "Aqua Sphere",
    sliderImg: [
      {
        _id: 1,
        image: "https://i.ibb.co/Hh4Mk9S/71-LGm73h2j-L-AC-UX575.jpg",
      },
      {
        _id: 2,
        image: "https://i.ibb.co/Hh4Mk9S/71-LGm73h2j-L-AC-UX575.jpg",
      },
    ],
  },
  {
    _id: 1010,
    title: "TOMS Women's, Alpargata Recycled Slip-On",
    image: "https://i.ibb.co/9NMNs8r/61q-DBTkm4-L-AC-UY695.jpg",
    description:
      "TOMS commits ⅓ of their profits in support of grassroots good, partnering with organizations at the local level to boost mental health, increase access to opportunity, and end gun violence.",
    price: 170,
    oldPrice: 280,
    isNew: true,
    category: "Womens",
    brand: "TOMS",
    sliderImg: [
      {
        _id: 1,
        image:
          "https://i.ibb.co/gt67qSh/71-R2-YRl-MVr-L-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 2,
        image:
          "https://i.ibb.co/ZL4MsZm/718-YWt6rz-NL-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 3,
        image:
          "https://i.ibb.co/3rmHvS6/61w2-WYj-U5-EL-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 4,
        image:
          "https://i.ibb.co/TkRD3mT/71-BEZAJ4-KCL-AC-SX575-SX-UX-SY-UY.jpg",
      },
    ],
  },
  {
    _id: 1011,
    title: "Steve Madden Men's Fenta Fashion Sneaker",
    image: "https://i.ibb.co/sRt3Mn7/813-Uu-Oj-Wf-ZL-AC-UX695.jpg",
    description:
      "Steve Madden, the company, was founded by Steve Madden, the man, in 1990 in Brooklyn, where he started out making trend-advancing shoes one pair at a time. It was not long after that the Steve Madden focus on now-ness earned rave reviews from young female fans mad for the funky, chic, and yet competitively priced footwear it produced. The company popularized the dressy sneaker, and continues to man the forefront of trends.",
    price: 110,
    oldPrice: 120,
    isNew: false,
    category: "Mens",
    brand: "Steve Madden",
    sliderImg: [
      {
        _id: 1,
        image:
          "https://i.ibb.co/tBCRRBS/81-BGt1-Lwp-XL-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 2,
        image:
          "https://i.ibb.co/ZH04ht5/91h-Na-Eh-XAw-L-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 3,
        image:
          "https://i.ibb.co/GW58cFG/61-HYdf8d-JSL-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 4,
        image:
          "https://i.ibb.co/wCwW5wX/61-ABc5-l-CHL-AC-SX575-SX-UX-SY-UY.jpg",
      },
    ],
  },
  {
    _id: 1012,
    title: "PUMA Men's Ignite Fasten8 Golf Shoe",
    image: "https://i.ibb.co/frrcRyh/71-R-y-Y8-Yu3-L-AC-UX695.jpg",
    description:
      "The TPU structure of the PWR Cage helps provide unparalleled support around the midfoot while the laces integrated webbing straps help wrap the midfoot for a secure fit. The Flat-Knit Mesh upper combined with PWR Frame TPU overlays provide a breathable and 1 year waterproof warranty that be sure to will turn heads. On top of a full-length IGNITE Foam midsole, wrapped in Sole Shield for added durability, provides unparalleled comfort and energy return to help you feel and play your best all day long.",
    price: 350,
    oldPrice: 400,
    isNew: true,
    category: "Mens",
    brand: "PUMA",
    sliderImg: [
      {
        _id: 1,
        image:
          "https://i.ibb.co/dQn35KF/71a-Mi0r-NOt-L-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 2,
        image:
          "https://i.ibb.co/HHrvfHz/71y-IKDM0t-JL-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 3,
        image:
          "https://i.ibb.co/vJ516vt/712hn-OQZg0-L-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 4,
        image:
          "https://i.ibb.co/6HkJGdC/716l-YIf-Vgt-L-AC-SX575-SX-UX-SY-UY.jpg",
      },
    ],
  },
  {
    _id: 1013,
    title: "PUMA Womens Carina Sneaker",
    image: "https://i.ibb.co/DM7btHZ/61-Qi-x-SJHDL-AC-SY575-SX-UX-SY-UY.jpg",
    description:
      "Indulge in the ideal of both worlds with our Modern Runner Sneakers. This style melds a carefree, easy-to-wear upper with serious performance in EVA tooling and contact EVA midsole to give you the responsive bounce you need with every stride.",
    price: 150,
    oldPrice: 270,
    isNew: false,
    category: "Womens",
    brand: "PUMA",
    sliderImg: [
      {
        _id: 1,
        image:
          "https://i.ibb.co/jVhcZPw/71u2-Muh5-O5-L-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 2,
        image:
          "https://i.ibb.co/4Vx0gw9/6122-FQ4pve-S-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 3,
        image:
          "https://i.ibb.co/y6ThnnZ/51-EVQe-Teh4-L-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 4,
        image:
          "https://i.ibb.co/tQgzyfs/41-G45tww6-DL-AC-SY575-SX-UX-SY-UY.jpg",
      },
    ],
  },
  {
    _id: 1014,
    title: "Nike Kyrie 5 Low Men's Basketball Shoes",
    image: "https://i.ibb.co/P9mw7qw/718-O6-FXp-U8-L-AC-UY695.jpg",
    description:
      "Designed for a quick, crafty game, this shoe enables players who use their speed and multidirectional ability to stay in control while taking advantage of the separation they create. Glove-Like Fit The laces feed through interlocking bands in the forefoot. When you tighten the laces, they pull down to help keep your foot comfortably secure inside the shoe. Responsive Court Feel The foam in the midsole feels soft and smooth, while helping to keep you low to the ground and enhancing the sensation of court feel.",
    price: 250,
    oldPrice: 350,
    isNew: true,
    category: "Mens",
    brand: "Nike",
    sliderImg: [
      {
        _id: 1,
        image:
          "https://i.ibb.co/SxWMXJc/618b-Ogsvoa-L-AC-SY575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 2,
        image:
          "https://i.ibb.co/fMSxDHQ/61i-Iv2r5m2-L-AC-SY575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 3,
        image:
          "https://i.ibb.co/Yfsvmzr/71u-Uq-YKs-BPL-AC-SY575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 4,
        image:
          "https://i.ibb.co/7rZgSjj/7134-WGy-Ic-AL-AC-SY575-SX-UX-SY-UY.jpg",
      },
    ],
  },
  {
    _id: 1015,
    title: "Skechers Women's Go Walk 5-True Sneaker",
    image: "https://i.ibb.co/N3Tjm2g/81t-OSIXDyq-L-AC-UX575.jpg",
    description:
      "Heathered Mesh Lace Up partnering with organizations at the local level to boost mental health, increase access to opportunity, and end gun violence.",
    price: 170,
    oldPrice: 240,
    isNew: true,
    category: "Womens",
    brand: "Skechers",
    sliderImg: [
      {
        _id: 1,
        image:
          "https://i.ibb.co/ZTSwn4t/81vc-Sp5-K1-OL-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 2,
        image:
          "https://i.ibb.co/hFWyzyD/81-Nx-Dfg-Zg-BL-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 3,
        image:
          "https://i.ibb.co/my856km/61-Kjeh9-FSe-L-AC-SX575-SX-UX-SY-UY.jpg",
      },
      {
        _id: 4,
        image:
          "https://i.ibb.co/BfdThc0/81t06-T4de-JS-AC-SX575-SX-UX-SY-UY.jpg",
      },
    ],
  },
];

app.get("/shoes", (req, res) => {
  res.send(shoesData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
