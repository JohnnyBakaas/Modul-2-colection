const model = {
  app: {
    currentPage: "productpage",
    currentUser: "Per",
  },

  inputs: {
    productPage: {
      productId: 1,
      searchText: "",
      postNo: "",
      isCompare: false,
      imageIndex: 2,
      colorIndex: 0,
    },
    spørsmål: {
      tittel: "",
      spørsmål: [],
    },
  },
  //data
  users: [{ name: "Per", pwd: "123" }],
  orders: [
    {
      customer: "Per",
      orderLines: [
        { productId: 1, count: 1 },
        { productId: 2, count: 4 },
      ],
    },
  ],

  shoppingCart: [
    { productId: 1, count: 1 },
    { productId: 2, count: 4 },
  ],

  products: [
    {
      id: 1,
      title: "Sony WH-H910 trådløse hodetelefoner",
      description: "Støyreduksjon med dual noice sensor + 35 timers batteritid",
      productNo: 1149495,
      colors: [
        { text: "sort", code: "black" },
        { text: "Blå", code: "#4F7183" },
      ],
      brandLogo: "https://www.komplett.no/mfglogo/SONY.gif",
      price: 2190,
      categoryId: 2,
      rating: {
        rating: 4.5,
        count: 30,
      },
    },
    {
      id: 2,
      title: "LG TV 65tommer 4k",
      description: "Stor tv med høy bildekvalitet",
      productNo: 1149495,
      colors: [{ text: "sort", code: "black" }],
      brandLogo: "https://www.komplett.no/mfglogo/SONY.gif",
      price: 7990,
      categoryId: 2,
      rating: {
        rating: 5,
        count: 20,
      },
    },
  ],

  categories: [
    { name: "TV, lyd & bilde", id: 1 },
    { name: "Hodetelefoner", id: 2, parentId: 1 },
    { name: "Trådløse hodetelefoner", id: 3, parentId: 2 },
  ],
};
