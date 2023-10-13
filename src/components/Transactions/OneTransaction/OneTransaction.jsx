import { Tr, Td } from "../Transactions.styled"
export const OneTransaction = ({transaction})=> {
    return(  <Tr key={transaction.key}>
        <Td>{transaction.type}</Td>
        <Td>{transaction.amount}</Td>
        <Td>{transaction.currency}</Td>
      </Tr>)
}