import { StatItem } from "./StatItem/StatItem"
export const Statistics = (data)=>{
    return (<section>
    <h2>{data.title}</h2>
  
    <ul>
     <StatItem /> 
    </ul>
  </section>)
}

Statistics.defaultProps = {
    title:"Upload stats"
}