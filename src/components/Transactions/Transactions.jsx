import { SectionWrap } from "components/Section/Section"
import { ProfileContainer } from "components/Profile/Profile.styled"
import { Table, Thead} from "./Transactions.styled"
import { OneTransaction } from "./OneTransaction/OneTransaction"
export const Transactions = ({transactions})=>{
    return (<SectionWrap><ProfileContainer><Table >
    <Thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </Thead>
  
    <tbody>
{transactions.map(transaction=><OneTransaction transaction={transaction} key={transaction.id}/>)}
    </tbody>
  </Table></ProfileContainer> </SectionWrap>)
}