import { gql, useQuery } from "@apollo/client";
import { handleGraphqlErrors } from "../../utils/apolo.util";
import { useSnackbar } from "notistack";
import { TransactionHistoryResponse } from "../../gql/graphql";
import React, { useState } from "react";
import TransactionHistoryStore from "../../store/transaction_history.store";

const GET_LIST_TRANSACTION_HISTORY = gql`
  query getTransactionHistory($skip: Int, $take: Int) {
    getTransactionHistory(skip: $skip, take: $take) {
      count
      transactionHistory {
        id
        type
        user_id
        created_at
        amount
        blockchain_transaction {
          tx_hash
          status
        }
      }
    }
  }
`;

export default function useTransactionHistory() {
  const { enqueueSnackbar } = useSnackbar();
  const [totalRecord, setTotalRecord] = useState(0);
  const { loading, refetch } = useQuery<{ getTransactionHistory: TransactionHistoryResponse }>(
    GET_LIST_TRANSACTION_HISTORY,
    {
      variables: {
        skip: 0,
        take: 10,
      },
      onError: (e) => {
        const errors = handleGraphqlErrors(e);
        errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
      },
    },
  );

  const loadPage = async (page: number, rowPerPage: number) => {
    if (TransactionHistoryStore.transactions[page]) {
      return;
    }
    const res = await refetch({
      skip: rowPerPage * page,
      take: 10,
    });
    TransactionHistoryStore.setListTransaction(page, res?.data.getTransactionHistory?.transactionHistory ?? []);
    setTotalRecord(res?.data.getTransactionHistory?.count ?? 0);
  };

  React.useEffect(() => {
    loadPage(0, 10).then();
  }, []);
  return {
    loading,
    loadPage,
    totalRecord,
  };
}
