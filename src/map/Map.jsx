import React, { memo }from "react";
import geoUrl from "../json/regions_kr.json"
import commaNumber from 'comma-number'
import axios from 'axios'

import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from 'react-simple-maps'

const MapChart = ({ setTooltipContent }) => {
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{scale: 200}}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) => 
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME, NAME_LONG } = geo.properties;
                    axios.get(`https://covid19.mathdro.id/api/countries/${NAME_LONG}`)
                      .then(res => {
                        const country = res.data;
                        setTooltipContent(`${NAME} - ${commaNumber(country.confirmed.value) + "명"}`);
                      })
                      .catch(err => {
                        setTooltipContent(`${NAME} - 정보를 찾지 못했습니다.`);
                      })
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  )
}

export default memo(MapChart);