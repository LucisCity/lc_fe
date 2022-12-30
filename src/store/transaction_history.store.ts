import { makeAutoObservable } from "mobx";
import { TransactionLog } from "../gql/graphql";

class TransactionHistoryStore {
  private _transactions: { [page: number]: TransactionLog[] } = {};
  constructor() {
    makeAutoObservable(this);
  }

  get transactions() {
    return this._transactions;
  }

  setListTransaction(page: number, list: TransactionLog[]) {
    this._transactions[page] = list;
  }

  setNewTransaction(data?: TransactionLog) {
    if (data) {
      const firstPage = this._transactions[0];
      // remove old data in bottom arr
      firstPage.pop();
      // add new data to top arr
      firstPage.unshift(data);
      this._transactions = { 0: firstPage };
    }
  }
}

export default new TransactionHistoryStore();
