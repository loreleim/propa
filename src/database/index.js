class Database {
  constructor() {
    this.multidimensionalArray = {
      About: [
        {
          name: "CDL Mockups",
        }
      ]
    };

    this.settings = [
      "File", 
      "Edit",
      "View",
      "Insert",
      "Format",
      "Tools",
      "Help"
    ]
  }
}

const store = new Database();
export default store;
