
import index from './index.json'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='container-fluid text-center  text-dark '>
      
      <h1 className='mt-5 bg-primary'>Doctor Profile Card</h1>
      
      <div className='row bg-warning'
      >
        {
           index.map(index=>{
            return(

              <>
              <div className='col-sm-3 mt-5 '
              style={{border:'2px solid black',padding:'20px',margin:'3%'}}>
               <div className='box'>
                <img src={index.image}/>

              </div>  
              <div className='title'>
                <h2>{index.name}</h2>
              </div>
              <div className=''>
                <p>{index.desc}</p>
              </div>

              </div>
              </>
             
                   )
          })
        }
      </div>
     
    </div>
  )
}

export default App