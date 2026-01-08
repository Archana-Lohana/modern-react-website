import React from 'react'
import Section1 from './components/Section1/Section1'
const App = () => {
  const users = [
    {
      img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'Prime customers,that have access to bank credit and are satisfied with the current product',
      color:'blue',
      tag:'Satisfied'
    },
    { 
      img:'https://images.unsplash.com/photo-1588091210060-1ee4fab270ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'Prime customers,that have access to bank credit and are not satisfied with the current servive',
      color:'lightseagreen',
      tag:'Underserved'
    },
    { 
      img:'https://images.unsplash.com/photo-1545184180-25d471fe75eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHx3b3JraW5nfGVufDB8fDB8fHww',
      intro:'Customers from near-prime and sub-prime segments with limited or no access to traditional bank credit services.',
      color:'royalblue',
      tag:'Underbanked'
    },
     { 
      img:'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&auto=format&fit=crop&q=60',
      intro:'Customers with no formal banking relationship and complete exclusion from traditional financial services.',
      color:'crimson',
      tag:'Unbanked'
    },
     { 
      img:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60',
      intro:'Individuals with little or no credit history, making them invisible to traditional credit scoring systems',
      color:'purple',
      tag:'Credit Invisible'
    },
    
  ]
  return (
    <div>
      <Section1 users={users}/>
    </div>
  )
}
export default App
