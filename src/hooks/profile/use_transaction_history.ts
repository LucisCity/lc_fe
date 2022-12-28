import { gql, useQuery } from "@apollo/client";
import { handleGraphqlErrors } from "../../utils/apolo.util";
import { useSnackbar } from "notistack";
import { TransactionHistoryResponse, TransactionLog } from "../../gql/graphql";
import { useState } from "react";

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
  const [listTransactionHistory, setListTransactionHistory] = useState<{ [page: number]: TransactionLog[] }>([]);
  const { loading, refetch } = useQuery<{ getTransactionHistory: TransactionHistoryResponse }>(
    GET_LIST_TRANSACTION_HISTORY,
    {
      variables: {
        skip: 0,
        take: 10,
      },
      onCompleted: (res) => {
        setListTransactionHistory({
          ...listTransactionHistory,
          0: res?.getTransactionHistory?.transactionHistory ?? [],
        });
        setTotalRecord(res?.getTransactionHistory.count ?? 0);
      },
      onError: (e) => {
        const errors = handleGraphqlErrors(e);
        errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
      },
    },
  );

  const nextPage = async (newPage: number, rowPerPage: number) => {
    const res = await refetch({
      variables: {
        skip: rowPerPage * newPage,
        take: 10,
      },
    });
    setListTransactionHistory({
      ...listTransactionHistory,
      [newPage]: res?.data?.getTransactionHistory?.transactionHistory ?? [],
    });

    console.log(rowPerPage * newPage);
  };
  return {
    loading,
    listTransactionHistory,
    setListTransactionHistory,
    nextPage,
    totalRecord,
  };
}
