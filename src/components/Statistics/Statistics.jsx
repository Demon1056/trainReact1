import { StatItem } from "./StatItem/StatItem"
import { SectionWrap } from "components/Section/Section"
import { ProfileContainer } from "components/Profile/Profile.styled"
import { StatisticTitle, StatisticList } from "./Statistics.stuled"
export const Statistics = (data)=>{
    return (<SectionWrap>
      <ProfileContainer>
    <StatisticTitle>{data.title}</StatisticTitle>
  
    <StatisticList>
    {data.data.map((data, index, arr)=> (<StatItem data={data} key={data.id} length={arr.length}
     />))}
    </StatisticList>
    </ProfileContainer>
  </SectionWrap>)
}

Statistics.defaultProps = {
    title:"Upload stats"
}