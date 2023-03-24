
import AvailableRent from "../AvailableRent/AvailableRent";

const Available =({availableData, cutPost, deleteBike,}) => {
    return(
        <div>
           <div>
                {availableData.map(((data, index) => (
                    <AvailableRent key={index} data={data} cutPost={cutPost}
                    deleteBike={deleteBike}/>
                )))}
            </div>
        </div>
    );
}

export default Available;
