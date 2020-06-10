import style from "./power.module.scss"

const powerGraph = props => {

  return(

    <svg className={style.mainsvg} height="100%" id="liveSVG" viewBox="0 0 100 100" width="100%">
    <g  id="DcContainer">
      
      
      
      <polyline  className="svg-green-stroke" fill="none" id="line-dc" points="15,15 15,45 50,45" strokeWidth="3"></polyline>
    
      <circle  cx="15" cy="15" id="canvas-dc" r="14" className="svg-green"></circle>
    
      
      <svg  height="6" id="gid_3cee6746_0" width="16" x="18" y="42">
        
        <g  id="gid_3cee6746_3">
          
          <rect  className="svg-green" height="6" id="canvas-text-dc" rx="2" ry="2" width="16" x="0" y="0"></rect>
          
          
          
          <text  fill="#ffffff" fontFamily="Roboto, Verdana" fontSize="3.5" id="text-dc" textAnchor="middle" x="8" y="1"> 909<tspan  id="gid_3cee6746_8"> W</tspan></text>
        </g>
      </svg>
      <svg  height="24" id="shape-dc" viewBox="0 0 85.04 85.04" width="24" x="2.5" y="2.5">
        <path  d="M37.226,79.223h-0.031H24.669h-0.031v-21.5c0-1.018,1.791-2.434,2.961-2.434h6.574
            c1.17,0,3.021,1.416,3.021,2.434v0.197c0.004,0.029,0.031,0.043,0.031,0.074V79.223z" fill="#ffffff"></path>
        <path  d="M52.919,79.223H52.87H40.362h-0.047V45.138c0-1.018,1.789-2.434,2.959-2.434h6.572
            c1.172,0,3.023,1.416,3.023,2.434v0.184c0.008,0.068,0.049,0.087,0.049,0.172V79.223z" fill="#ffffff"></path>
        <path  d="M68.612,79.223h-0.049H56.058h-0.051V49.697c0-1.018,1.791-2.433,2.963-2.433h6.572
            c0.676,0,1.543,0.485,2.188,1.079c0.188,0.141,0.338,0.307,0.473,0.49c0.023,0.031,0.045,0.055,0.066,0.086
            c0.195,0.301,0.344,0.619,0.344,0.957V79.223z" fill="#ffffff"></path>
        <path  d="M52.851,27.771l-6.018-5.653l4.525-6.933l-8.244-0.466l-0.986-8.196l-6.611,4.947l-6.041-5.652
            l-1.889,8.037l-8.238-0.46l3.688,7.375l-6.609,4.947l7.6,3.274l-1.881,8.05l7.896-2.391l3.744,7.368l4.527-6.902l7.592,3.242
            l-0.957-8.202L52.851,27.771z M43.537,28.14c-1.289,2.402-3.236,3.997-5.85,4.783c-2.595,0.785-5.099,0.534-7.508-0.753
            c-2.408-1.287-4.008-3.235-4.795-5.847c-0.786-2.612-0.538-5.118,0.753-7.521c1.287-2.401,3.238-3.996,5.849-4.782
            c2.611-0.786,5.116-0.536,7.518,0.75c2.402,1.289,4,3.239,4.787,5.85C45.078,23.233,44.827,25.738,43.537,28.14z" fill="#ffffff"></path>
      </svg>
      
      <svg  height="10" id="indicator-dc" viewBox="0 0 15 15" width="10" x="10" y="32">
        <g  id="indicator-dc-rot" transform="rotate(0 7.5 7.5)">
          
          <polygon  fill="#ffffff" points="1.5,0.5 13.5,0.5 7.5,15"></polygon>
          <polygon  className="svg-green" id="indicator-dc-color" points="2,0.0 13,0.0 7.5,13.5"></polygon>
        </g>
      </svg>
    
    </g>
    
    <g  id="BatteryContainer">
      
    
      <g  id="gid_3cee6746_10"> 
          
        
        <polyline  className="svg-orange-stroke" fill="none" id="line-battery" points="15,85 15,55 50,55" strokeWidth="3"></polyline>
      </g>
    
      <circle  cx="15" cy="85" id="canvas-battery" r="14" className="svg-green"></circle>
      <svg  height="6" id="gid_3cee6746_11" width="16" x="18" y="52">
          
            
            <g  id="gid_3cee6746_20">
              
              <rect  className="svg-orange-fill" height="6" id="canvas-text-battery" rx="2" ry="2" width="16" x="0" y="0"></rect>
              <text  fill="#FFFFFF" fontFamily="Roboto, Verdana" fontSize="3.5" id="text-battery" textAnchor="middle" x="8" y="1">
                117<tspan  id="gid_3cee6746_21"> W</tspan>
              </text>
              
              
            </g>
      </svg>
      <svg  height="25" id="shape-battery" viewBox="0 0 85.04 85.04" width="25" x="2.5" y="72.5">
        <path  d="M66.98,23.292h-4.813v-4.892H48.871v4.892H36.206v-4.892H22.909v4.892h-4.85
            c-3.068,0-5.579,2.511-5.579,5.573v32.203c0,3.064,2.511,5.566,5.579,5.566L66.98,66.64c3.064,0,5.578-2.502,5.578-5.572V28.864
            C72.559,25.802,70.045,23.292,66.98,23.292z M35.875,48.401h-6.391v6.419h-4.096v-6.419h-6.394V44.33h6.394v-6.387h4.096v6.387
            h6.391V48.401z M64.344,48.028h-4.836h-3.863h-4.83v-4.213h4.83h3.863h4.836V48.028z" fill="#ffffff"></path>
      </svg>
      <svg  height="10" id="indicator-battery" viewBox="0 0 15 15" width="10" x="10" y="58">
        
        <g  id="indicator-battery-rot" transform="rotate(0 7.5 7.5)">
            
            <polygon  fill="#ffffff" points="1.5,0.5 13.5,0.5 7.5,15"></polygon>
            <polygon  className="svg-orange-fill" id="indicator-battery-color" points="2,0.0 13,0.0 7.5,13.5"></polygon>
          </g>
      </svg>
    </g>
    
    <g  id="GridContainer">
    
        
        
      
      <polyline  className="svg-green-stroke" fill="none" id="line-grid" points="85,15 85,45 50,45" strokeWidth="3"></polyline>
      
      
    
        <circle  cx="85" cy="15" id="canvas-grid" r="14" className="svg-green"></circle>
        <svg  height="6" id="gid_3cee6746_27" width="16" x="66" y="42">
          
          
    
            
            <g  id="gid_3cee6746_30">
              <rect  className="svg-green" height="6" id="canvas-text-grid" rx="2" ry="2" width="16" x="0" y="0"></rect>
              
              
              <text  fill="#ffffff" fontFamily="Roboto, Verdana" fontSize="3.5" id="text-grid" textAnchor="middle" x="8" y="1">
                1<tspan  id="gid_3cee6746_35"> W</tspan>
              </text>
            </g>
    
            
            
    
        </svg>
        <svg  height="25" id="shape-grid" viewBox="0 0 85.04 85.04" width="25" x="72.5" y="2">
          <polygon  fill="#ffffff" points="51.239,79.899 33.679,80.163 37.28,50 17.649,50 38.329,40.512 38.849,33 21.835,33 39.919,24.06 42.509,5.043 45.075,24.041 63.062,33 46.13,33 46.651,40.541 67.39,50 47.683,50 "></polygon>
        </svg>
        <svg  height="10" id="indicator-grid" viewBox="0 0 15 15" width="10" x="80" y="32">
          <g  id="indicator-grid-rot" transform="rotate(180 7.5 7.5)">
            
            <polygon  fill="#ffffff" points="1.5,0.5 13.5,0.5 7.5,15"></polygon>
            <polygon  className="svg-green" id="indicator-grid-color" points="2,0.0 13,0.0 7.5,13.5"></polygon>
          </g>
          
        </svg>
    
    </g>
    
    <g  id="homeContainer">
      
        
        
      
      <polyline  className="svg-orange-stroke" fill="none" id="line-home" points="85,85 85,55 50,55" strokeWidth="3"></polyline>
      
      
    <circle  cx="85" cy="85" id="canvas-home" r="14" className="svg-green"></circle>
    <svg  height="6" id="gid_3cee6746_43" width="16" x="66" y="52">
    
      
      
    
        
        
    
        
        <g  id="gid_3cee6746_48">
          <rect  className="svg-orange-fill" height="6" id="canvas-text-home" rx="2" ry="2" width="16" x="0" y="0"></rect>
          <text  fill="#ffffff" fontFamily="Roboto, Verdana" fontSize="3.5" id="text-home" textAnchor="middle" x="8" y="1">
            724<tspan  id="gid_3cee6746_49"> W</tspan></text>
          
          
        </g>
    </svg>
    <svg  height="25" id="shape-home" viewBox="0 0 85.04 85.04" width="25" x="72.5" y="72">
      <path  d="M74.143,40.328h-4.577l-22.151-20.56c-2.704-2.692-7.091-2.779-9.755-0.12L15.317,40.328h-4.429
            c-2.145,0-2.627-1.042-1.068-2.526L39.679,9.575c1.563-1.481,4.115-1.439,5.68,0.042l29.854,28.165
            C76.78,39.267,76.298,40.328,74.143,40.328z" fill="#ffffff"></path>
      <path  d="M45.4,23.087c-1.25-1.238-3.524-1.23-4.71-0.051L18.741,43.483V72.24c0,1.654,0.91,4.314,2.562,4.314
            h42.431c1.652,0,3.687-2.66,3.687-4.314V43.619L45.4,23.087z M32.13,41.135c3.578,0,6.576,2.085,7.352,4.872h-2.701
            c-0.75-1.372-2.55-2.343-4.651-2.343c-2.1,0.001-3.899,0.971-4.651,2.343h-2.702C25.555,43.22,28.554,41.135,32.13,41.135z
            M42.799,67.912c-8.229,0-14.986-5.471-15.76-12.464h31.523C57.791,62.441,51.031,67.912,42.799,67.912z M58.099,46.007
            c-0.749-1.372-2.552-2.343-4.649-2.343c-2.101,0-3.9,0.971-4.653,2.343h-2.701c0.776-2.787,3.774-4.872,7.354-4.872
            c3.575,0,6.576,2.085,7.352,4.872H58.099z" fill="#ffffff"></path>
    </svg>
    <svg  height="10" id="indicator-home" viewBox="0 0 15 15" width="10" x="80" y="58">
      
      <g  id="indicator-home-rot" transform="rotate(0 7.5 7.5)">
          
          <polygon  fill="#ffffff" points="1.5,0.5 13.5,0.5 7.5,15"></polygon>
          <polygon  className="svg-orange-fill" id="indicator-home-color" points="2,0.0 13,0.0 7.5,13.5"></polygon>
        </g>
    </svg>
    </g>
    
    
    <circle  cx="50" cy="50" id="canvas-inverter" r="14" className="svg-green"></circle>
    <svg  height="25" id="shape-inverter" viewBox="0 0 85.04 85.04" width="25" x="37.5" y="37.5">
      <path  d="M20.489,70.718c-0.179-0.707-1.472-50.964-1.472-51.419c0-1.286,2.489-3.865,4.158-5.077l1.218,61.281
            C22.83,74.184,20.781,71.901,20.489,70.718z" fill="#ffffff"></path>
      <path  d="M64.55,70.71c-0.319,1.258-2.583,3.728-4.171,4.997l1.226-61.673c1.646,1.11,4.417,3.901,4.417,5.265
            C66.022,19.753,64.726,69.994,64.55,70.71z" fill="#ffffff"></path>
      <path  d="M42.508,26.043c-3.549,0-6.436,2.886-6.436,6.437c0,3.546,2.887,6.434,6.436,6.434
                c3.548,0,6.435-2.888,6.435-6.434C48.943,28.929,46.056,26.043,42.508,26.043z" fill="#ffffff"></path>
      <path  d="M42.517,12.469c-5.914,0.142-12.839,0.4-16.454,0.858l1.258,63.4c3.489,0.478,10.836,0.864,13.705,0.864
                c0.319,0,0.604-0.006,0.845-0.011l0.631-0.028c0.171,0.011,0.436,0.022,0.655,0.028c0.247,0.005,0.53,0.011,0.845,0.011
                c2.798,0,9.858-0.369,13.433-0.831l1.26-63.467C55.012,12.855,48.294,12.608,42.517,12.469z M50.244,53.027
                c0,1.133-0.921,2.055-2.053,2.055H36.823c-1.129,0-2.052-0.922-2.052-2.055v-5.099c0-1.128,0.923-2.05,2.052-2.05h11.368
                c1.131,0,2.053,0.922,2.053,2.05V53.027z M42.508,41.829c-5.155,0-9.351-4.195-9.351-9.349c0-5.157,4.196-9.351,9.351-9.351
                c5.155,0,9.347,4.194,9.347,9.351C51.855,37.634,47.663,41.829,42.508,41.829z" fill="#ffffff"></path>
    </svg>
    </svg>
  )
}

export default powerGraph;