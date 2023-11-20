/* eslint-disable react/prop-types */
import Item from "./Item"
import Title from "./Title"

const Sales = ({ endpoint: { title, items } }) => {
    return (
        <>
            <div className='nike-container'>
                <Title title={title} />
                <div className='grid items-center justify-items-center grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 lg:gap-5 mt-7'>
                    {items.map((item, idx) =>
                        (<Item {...item} key={idx} />)
                    )}
                </div>
            </div>
        </>
    )
}

export default Sales
