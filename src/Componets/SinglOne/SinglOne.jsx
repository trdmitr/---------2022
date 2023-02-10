import React from 'react'



class SinglOne extends React.Component {
  

  componentDidMount() {
    
    
    
  }
    render() {
      const singls = this.props.songs.filter(song => song.name === this.props.selId)
      return (
        singls.map((singl) => (  
            <div>
              <img src= {singl.photo}/>
                 <p>{singl.name}!</p>
            </div>
            
      //       console.log("MAP", singl.name
      // )
        )
        )
      )
    }
  }

export default SinglOne