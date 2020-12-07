import React from 'react';

import {Statistic} from 'semantic-ui-react'

function MainStatistics({title, value, size, color}){
return(
    <Statistic size= {size} color= {color}>
    <Statistic.Label> {title}</Statistic.Label>
    <Statistic.Value> {value}</Statistic.Value>
    </Statistic>
)}

export default MainStatistics