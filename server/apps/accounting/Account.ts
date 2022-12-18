class Account {
  do () {
    console.log(':TS');
  }

  public static todoGo () {
    console.log(':TS:statica');
  }
}

const account = new Account();
export { Account, account };


