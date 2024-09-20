//import React from 'react'

const SecondComponent = () => {



 

    const books=["Harry Potter y la piedra filosofal",
                "Harry Potter y la camara secreta",
                 "Harry Potter y el prisionero de azkaban",
                 "Harry Potter y la camara secreta",
                "Harry Potter y la camara secreta"]


    
      /* const listBooks=[];
       books.forEach((book,index)=>{
            listBooks.push(<li key={index}>{book}</li>)

       })*/

  return (
    
    <div>
        <ul>

            {

            books.length>0?(
                books.map((book,index)=>{return <li key={index}>{book}</li>})
                          ):("No Existen libros")

            }

        </ul>

           
            
            </div>
    
  )
}

export default SecondComponent
