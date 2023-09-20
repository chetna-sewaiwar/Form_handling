import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState("")
  const [rate, setRate] = useState(" ")
  const [feedBack, setFeedBack] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeed = {
      name: name,
      rate: rate
    }
    setFeedBack([...feedBack, newFeed]);
    setName("")
    setRate ("")
  }
  


  return (
    <div>
      <form action="" onSubmit={handleSubmit }>
        <label htmlFor="">Name</label>
        <br />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label htmlFor="">Rate</label>
        <br />
        <input type="text" value={rate} onChange={(e) => setRate(e.target.value)} />
        <br />
        <button type='submit'> 
          submit
        </button>





      </form>
      <div>
        {
          feedBack.map((feed, index) =>
            <p key={index}>
              <p>
                 Name :{feed.name}
              </p>
              <p>
                Rate :{feed.rate}
              </p>
            </p>
          
          
          )
        }
      </div>






    </div>
  )
}

export default App