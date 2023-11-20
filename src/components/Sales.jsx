/* eslint-disable react/prop-types */
import Item from "./Item"
import Title from "./Title"

const Sales = ({ endpoint: { title, items } }) => {
    return (
        <>
            <div className='nike-container'>
                <Title title={title} />
                <div>
                    {items.map((item, idx) =>
                        (<Item {...item} key={idx} />)
                    )}
                </div>
            </div>
        </>
    )
}

export default Sales
