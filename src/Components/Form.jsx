import React from 'react'
import { useState } from 'react'

const Form = () => {
    

    const [fname, setfname] = useState("")
    
    const [display, setDisplay] = useState("");

    const handleChange = e => {
        
//fghjklfghjk

        setfname(e.target.value)
        console.log(fname)
    };



    const addList = (e) => {
        setDisplay(fname);
        setfname("")


    };







    return (
        <>




            <form className='mt-5' >
                <div className='d-flex '>
                    <div>

                        <input type="text" class="form-control" placeholder="Enter" value={fname} onChange={handleChange}/>

                    </div>
                    <div>
                        <button class="btn btn-primary" type="button" onClick={addList} >Add</button>
                    </div>
                </div>

                <div className='mt-3'>
                    <ul class="list-group" >
                        <li class="list-group-item"> Enter your name :{display}
                        <button type="button" class="btn btn-danger float-end">Delete</button>
                        <button type="button" class="btn btn-warning  float-end">Edit</button>
                          </li>
                        
                    </ul>
                </div>


            </form>



        </>
    )
}

export default Form