import React from 'react'
const Footer = () => {
  return (
    <>
    <div style={{background:'#37475a', height:'50px',width:'100%', color:'white'}}>
        <h3 style={{marginLeft:'650px'}}>Back to Top</h3>
    </div>
    <div style={{background:"black",height:'400px',width:'100%',color:'white', display:'flex',alignItems:'center'}} >
        <div style={{margin:'200px'}}>
        <h2>Get to Know Us</h2>
        <p>
            About Us
        </p>
        <p>Careers</p>
        
        </div>
        
        <div style={{display:'block',marginTop:'300px',marginRight:'150px'}}>
      <img src='./amz1.png'/>
      </div>
      <div>
    <h2>Connect with Us</h2>
    <p>Facebook</p>
    <p>Instagram</p>
    
      </div>
      
      
    </div>
    </>
  )
}

export default Footer;
