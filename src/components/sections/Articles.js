import React from 'react'
import forbesLogo from '../../assets/images/forbesLogo.png'
import vegnewsLogo from '../../assets/images/vegnewsLogo.png'

const Articles = () => (
  <header className="relative top-0 px-16 md:px-24 py-12 md:py-24">
    <div class="flex mb-4">
       
      <div align="center" class="w-1/3 ml-auto h-12" >
          “Here’s how to save small businesses <br/> 
          and #keepsmallstrong” < br/>
          <p></p>
          <div class="pad-Top"> 
            <img src={forbesLogo} height="100" width="100" alt="Forbes"/>
          </div>
      </div>
      <div align="center" class="w-1/3 ml-auto h-12">
         “Customers save Miami Vegan Bakery from shuttering <br/> with KeepSmallStrong.”
          <p></p>
          <div class="pad-Top"> 
            <img src={forbesLogo}  height="100" width="100" alt="Forbes"/>
          </div>
      </div>
      <div align="center" class="w-1/3 ml-auto h-12">
        “How you can support small <br/> 
        business during covid-19”
        <p></p>
        <div class="pad-Top"> 
         <img src={vegnewsLogo} height="100" width="100" alt="VegNews"/>
        </div> 
      </div>
    </div>
  </header>
);

export default Articles;