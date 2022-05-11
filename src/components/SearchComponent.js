import React from 'react'

function SearchComponent({SearchData}) {
  return (
    <>

{SearchData.map((SearchApiData) => {

return (<div className="list__row" key={SearchApiData.id}>
  <div className="img-section"><img src={SearchApiData.image} alt="" /></div>
  <div className="Text__sec">{SearchApiData.Description} </div>
</div>
)
})}
    </>
  )
}

export default SearchComponent




/* import React, { Component } from 'react'

export class SearchComponent extends Component {

    async componentDidMount(){
        let url = "https://api.github.com/users"
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({component: parsedData.avatar})
        console.log(parsedData);
    }

  render() {
    return (
      <>
        <div className="search_section">

          {this.state.component.map((element) => {
            return <div className="post_sec" >

                  
              </div>
          }) }



        </div>
      </>
    )
  }
}

export default SearchComponent */