 //should i use dynamo db?
  //if i do use dynamo db to store all my data, do i need an admin login so that
  //i can add and remove products and edit products from my website?
  //i do want to add that feature, maybe its better to just do it now instead of refactoring
  //what would my schema look like?
  productSchema
  {
    itemName:'',
    price: '',
    summary: '',
    bulletPoints: [Strings],
    inventory: Number,
  }
  userSchema
  {
    username: string,
    password: string,
    hash: string,
    date_created: Date,
    userType: String,
  }