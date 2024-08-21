import { data } from "../../result.js"
import "./Featured.css"
import Chart from "../Chart/Chart"
import Bigchart from "../Bigchart"
import Piechart from "../Piechart"
import { CustomBarChart } from "../Barchart/Barchart.jsx"

function Featured() {
  
  return (
    <div className="featured">
      
      <div className="featuredpiechart">
        <Piechart
          data={data}
          title="Top 5 Required products"
          dataKey="requirement_in_mt_"
          least={false}
        />
        <Piechart
          data={data}
          title="Top 5 Least Available products"
          dataKey="availability_in_mt_"
          least={true}
        />
  
      </div>
      <div className="featuredbarchart">
        <CustomBarChart
          data={data}
          title="Top 5 Required Products"
          dataKey="requirement_in_mt_"
          least={false}
        />
        <CustomBarChart
          data={data}
          title="Top 5 Least Available Products"
          dataKey="availability_in_mt_"
          least={true}
        />
      </div>
      <Bigchart
        data={data}
        title="Product Availability and Requirements"
        grid
      />
      <div className="featuredItem">
        <div className="widgetsm">
          <Chart
            data={data}
            title="State wise product"
            grid
            parent="state"
            child="product"
            defaultValue={data[0]}
          />
        </div>

        <div className="widgetsm">
          <Chart
            data={data}
            title="Year wise product"
            grid
            parent="_year"
            child="product"
            defaultValue={data[0]}
          />
        </div>

        <div className="widgetsm">
          <Chart
            data={data}
            title="Month wise product"
            grid
            parent="month"
            child="product"
            defaultValue={data[0]}
          />
        </div>
      </div>
    </div>
  )
}

export default Featured
