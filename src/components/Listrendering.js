import React from 'react'
import Listrenderingperson from './Listrenderingperson';

function listrendering() {
    const array = ["theja", "sree", "bridgelabzzz"];
    let kvArray = [{ key: 1, value: 10 },
                    { key: 2, value: 20 },
                    { key: 3, value: 30 }]
    const listrendering = kvArray.map((arrays,index) => <Listrenderingperson key={index} list={arrays}/>);
    return (
        <div>
            {
                listrendering
            }
        </div>
    )
}

export default listrendering


{/* <ul>
<li>sree</li>     
<li>theja</li>
</ul>  */}

// <ul>
//  <li>bridge</li>
// <li>sree</li>
// <li>theja</li>
//
// </ul> 