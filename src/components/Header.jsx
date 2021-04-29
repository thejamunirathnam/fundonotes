import React from 'react'

const Header = (props) =>{
    return(
        <div>
            <h1>
                Jsx program {
                    props.firstname
                }
            </h1>
            {
                    props.children
            }
        </div>
    )

    // return React.createElement(
    //     'div',null, React.createElement('h1',null,"theja looks great")
    // );
}

export default Header