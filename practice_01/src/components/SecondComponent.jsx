import React from 'react'

const SecondComponent = () => {

    const books=["Harry Potter y la piedra filosofal",
                "Harry Potter y la camara secreta",
                 "Harry Potter y el prisionero de azkaban",
                 "Harry Potter y la camara secreta",
                "Harry Potter y la camara secreta"]



  return (
    <>
    <div>
        <ul>
            {

                books.map((book,index)=>{

                    return <li key={index}>{book}</li>
                })

            }

        </ul>


    </div>
    </>

  )
}

export default SecondComponent
