import React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

const Graph = (props) => {

    function average(data){
        return _.round(_.sum(data)/data.length);
    }

    return (
        <div>
            <Sparklines data={props.data} height={80} width={170} >
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type='avg' />
            </Sparklines>
            <div className='center aligned content'>{average(props.data)} {props.unit}</div>
        </div>
    );
}

export default Graph;