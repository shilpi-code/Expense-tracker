import React from 'react';

const Chart= props => {
    return(
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <Chartbar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={null}
                    label={dataPoint.label}
                />
        ))}

        </div>
    );
};



export default Chart;