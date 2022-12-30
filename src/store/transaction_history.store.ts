import { makeAutoObservable } from "mobx";
import { TransactionLog, TransactionStatus } from "../gql/graphql";

class TransactionHistoryStore {
  private _transactions: { [page: number]: TransactionLog[] } = {};
  private _page = 0;
  private _totalRecord = 0;
  constructor() {
    makeAutoObservable(this);
  }

  reset() {
    this._page = 0;
    this._totalRecord = 0;
    this._transactions = {};
  }

  get transactions() {
    return this._transactions;
  }

  get page() {
    return this._page;
  }

  set page(page: number) {
    this._page = page;
  }
  get totalRecord() {
    return this._totalRecord;
  }

  set totalRecord(totalRecord: number) {
    this._totalRecord = totalRecord;
  }

  setListTransaction(page: number, list: TransactionLog[]) {
    this._transactions[page] = list;
  }
  updateStatusTransaction(transactionId: string, status: TransactionStatus) {
    // @ts-ignore
    this._transactions[0] =
      this._transactions[0].map((tx) => {
        if (tx.id === transactionId) {
          return {
            ...tx,
            // eslint-disable-next-line camelcase
            blockchain_transaction: {
              ...tx.blockchain_transaction,
              status,
            },
          };
        }

        return tx;
      }) ?? [];
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
