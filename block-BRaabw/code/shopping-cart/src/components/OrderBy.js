 function OrderBy(props) {
     return (
         <div className="sort">
            OrderBy
            <select value={props.selectedOrder} onChange={props.handleOrderBy}>
                <option value="">Select</option>
                <option value="lowest">Low To High</option>
                <option value="highest">High To Low</option>
            </select>
         </div>
     )
 }

 export default OrderBy;