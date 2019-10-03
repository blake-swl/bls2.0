import React, { useState, useEffect, useRef } from 'react';
import './landing.scss';

import { TweenMax, TimelineMax, SlowMo, Expo } from 'gsap';


// Assets
import hero from '../../../../dist/assets/landing__hero1.png';
import palette from '../../../../dist/assets/colorPalette.svg';
import typography from '../../../../dist/assets/typography.svg';
import screen from '../../../../dist/assets/screen1.svg';
import mobileOverlay from '../../../../dist/assets/mobile-overlay.svg';
import screenOverlay from '../../../../dist/assets/landing__overlay.svg';



const Landing = () => {
  const [offset, shiftOffset] = useState(0);
  const parallaxShift = () => shiftOffset(window.scrollY);

  useEffect(() => {
    requestAnimationFrame(() => {
      window.addEventListener('scroll', parallaxShift);
    })
  }, [])
  
  
  // useEffect(() => {
  //   const parallaxShift = () => shiftOffset(window.scrollY)
  //   window.addEventListener('scroll', parallaxShift);
    
    
  //   return () => {
  //     window.removeEventListener('scroll', parallaxShift)
  //   }
  // }, []);


  useEffect(() => {
    let tl = new TimelineMax({ease:  SlowMo.easeIn});

    tl.to('.landing__overlay', 1, {opacity: 1, ease: SlowMo.easeOut, delay: .5})
    
    TweenMax.to('.landing__header', .5, {opacity: 1, delay: .5, ease:  Expo.easeIn})
    TweenMax.to('.landing__cutoff', .5, {opacity: 1, delay: .5, ease:  Expo.easeIn}) 
    TweenMax.to('.bottom', .3, {marginTop: 0, delay: 1, ease:  Expo.easeIn})

  })
  let overlayPicker = () => {
    return window.screen.width > 500 ? 
     <img  src={screenOverlay} alt="" className="landing__overlay"/>
    :
     <img  src={mobileOverlay} className="landing__overlay" alt=""/>;
  }

  return(
    <div className="landing">
      <img src={screen} className="landing__rect__svg" alt=""/>
      <div className="landing__parallax">
        <img className="typography" src={typography} alt="" style={{ bottom: offset / - 4 }}/>
        <img className="palette" src={palette} alt="" style={{ top: offset / - 8 }}/>
      </div>
      <img className="landing__hero" src={hero} alt="" style={{ top: offset /  12 }}/>
      {overlayPicker()}
      <div className="mouse">
        <div className="mouse__text">scroll</div>
      </div>
      <h1 className="landing__header">Bold. creative.</h1>
      <div className="landing__cutoff">
        <svg className="top" xmlns="http://www.w3.org/2000/svg" width="1200.775" height="56.622" viewBox="0 0 1200.775 56.622">
          <g id="Group_12" data-name="Group 12" transform="translate(-309.38 -466.378)">
            <path id="Path_121" data-name="Path 121" d="M331.351,470.011q0-3.633-3.633-3.633h-14.7q-3.633,0-3.633,3.633v50.252q10.975.075,21.971.1Z" fill="#eeeeee"/>
            <path id="Path_122" data-name="Path 122" d="M381.694,466.378H367.162q-3.633,0-3.633,3.633v50.382q10.983-.015,21.971-.059v-50.5Q385.5,466.379,381.694,466.378Z" fill="#eeeeee"/>
            <path id="Path_123" data-name="Path 123" d="M482.207,466.378h-14.36q-3.633,0-3.633,3.633v49.728q10.822-.113,21.625-.24V470.011Q485.839,466.378,482.207,466.378Z" fill="#eeeeee"/>
            <path id="Path_124" data-name="Path 124" d="M428.576,468.8q-1.212-2.421-4.844-2.422H410.757q-3.633,0-3.632,3.633V520.23q10.814-.067,21.625-.161V509.8h.691l5.5,10.222q10.422-.09,20.833-.2Z" fill="#eeeeee"/>
            <path id="Path_125" data-name="Path 125" d="M530.9,487.743q2.336-2.336,7.7-2.335h11.764q5.535,0,7.871,2.335t2.336,7.872v7.093q0,3.807,3.633,3.806h14.532q3.8,0,3.806-3.806v-8.131q0-13.494-7.525-20.847T554,466.378H535.143q-13.668,0-21.106,7.266T506.6,494.577v24.681q10.707-.129,21.4-.258c.19,0,.379,0,.569,0V495.615Q528.569,490.08,530.9,487.743Z" fill="#eeeeee"/>
            <path id="Path_126" data-name="Path 126" d="M668.7,473.644q-7.44-7.266-21.106-7.266H628.216q-13.668,0-21.106,7.266t-7.439,20.933v24.329q10.983.048,21.971.119v-23.41q0-5.535,2.249-7.872t7.785-2.335h12.283q5.535,0,7.872,2.335t2.335,7.872v23.659q10.984.094,21.972.192V494.577Q676.138,480.912,668.7,473.644Z" fill="#eeeeee"/>
            <path id="Path_127" data-name="Path 127" d="M718.348,468.8q-1.214-2.421-4.845-2.422H700.528q-3.633,0-3.632,3.633v49.638q10.812.094,21.625.178V509.8h.691l5.415,10.072q10.508.078,21.013.135Z" fill="#eeeeee"/>
            <path id="Path_128" data-name="Path 128" d="M771.978,466.378h-14.36q-3.633,0-3.633,3.633v50.045q10.815.049,21.625.07V470.011Q775.61,466.378,771.978,466.378Z" fill="#eeeeee"/>
            <path id="Path_129" data-name="Path 129" d="M813.495,470.011q-.693-3.633-4.151-3.633H793.081q-4.669,0-3.46,3.979l12.874,49.752q10.837-.03,21.669-.106Z" fill="#eeeeee"/>
            <path id="Path_130" data-name="Path 130" d="M870.932,466.378H854.67q-3.463,0-4.152,3.633l-10.639,49.847q10.9-.118,21.782-.3l12.731-49.2Q875.254,466.379,870.932,466.378Z" fill="#eeeeee"/>
            <path id="Path_131" data-name="Path 131" d="M941.861,511.7H912.278q-2.074,0-2.076-1.9v-22.49q0-1.9,2.076-1.9h36.158q3.458,0,3.46-3.633V470.011q0-3.633-3.46-3.633H891.864q-3.633,0-3.633,3.633v49.005L889,519c19.028-.56,37.742-.179,56.494.439v-4.1Q945.494,511.7,941.861,511.7Z" fill="#eeeeee"/>
            <path id="Path_132" data-name="Path 132" d="M1020.343,520.948,992.549,468.8q-1.214-2.421-4.845-2.422H974.729q-3.632,0-3.632,3.633v50.352q9.413.345,18.9.637c.906.022,1.815.029,2.722.046V509.8h.691l6.095,11.336Q1009.894,521.206,1020.343,520.948Z" fill="#eeeeee"/>
            <path id="Path_133" data-name="Path 133" d="M1046.179,466.378h-14.36q-3.633,0-3.632,3.633v50.72c7.2-.231,14.412-.538,21.625-.879V470.011Q1049.812,466.378,1046.179,466.378Z" fill="#eeeeee"/>
            <path id="Path_134" data-name="Path 134" d="M1112.436,485.408h19.721q3.634,0,3.634-3.633V470.011q0-3.633-3.634-3.633h-65.393q-3.633,0-3.633,3.633v11.764q0,3.633,3.633,3.633h19.721a1.683,1.683,0,0,1,1.9,1.9v30.63q11.019-.507,21.97-.837V487.311Q1110.359,485.409,1112.436,485.408Z" fill="#eeeeee"/>
            <path id="Path_135" data-name="Path 135" d="M1168.141,466.378h-14.7q-3.633,0-3.633,3.633V517.29c7.323.261,14.647.614,21.97,1V470.011Q1171.773,466.378,1168.141,466.378Z" fill="#eeeeee"/>
            <path id="Path_136" data-name="Path 136" d="M1262.425,473.644q-7.44-7.266-21.107-7.266h-19.376q-13.666,0-21.1,7.266t-7.44,20.933v24.906c7.324.4,14.648.779,21.972,1.08V495.615q0-5.535,2.249-7.872t7.784-2.335h12.284q5.535,0,7.872,2.335t2.335,7.872v25.62q11.006.048,21.971-.1V494.577Q1269.864,480.912,1262.425,473.644Z" fill="#eeeeee"/>
            <path id="Path_137" data-name="Path 137" d="M1365.7,466.378h-14.359q-3.633,0-3.633,3.633v47.754q10.792-.8,21.625-1.766V470.011Q1369.337,466.378,1365.7,466.378Z" fill="#eeeeee"/>
            <path id="Path_138" data-name="Path 138" d="M1312.074,468.8q-1.212-2.421-4.845-2.422h-12.974q-3.633,0-3.633,3.633V520.7q10.815-.315,21.625-.808V509.8h.691l5.269,9.8q10.146-.516,20.308-1.19Z" fill="#eeeeee"/>
            <path id="Path_139" data-name="Path 139" d="M1440.265,466.378h-23.009a4.965,4.965,0,0,0-5.19,3.633l-11.6,44.126c7.077.041,14.11.4,21.114.952l6.921-27.778h.692l7.276,29.2c7.314.8,14.607,1.719,21.9,2.609l-12.912-49.113Q1444.588,466.378,1440.265,466.378Z" fill="#eeeeee"/>
            <path id="Path_140" data-name="Path 140" d="M1506.522,466.378h-14.7q-3.632,0-3.632,3.633v52.231c4.927.368,9.864.637,14.815.758a34.388,34.388,0,0,0,7.155-.84V470.011Q1510.155,466.378,1506.522,466.378Z" fill="#eeeeee"/>
          </g>
        </svg>
        <svg className="bottom" xmlns="http://www.w3.org/2000/svg" width="1273.952" height="63.48" viewBox="0 0 1273.952 63.48">
          <g id="Group_13" data-name="Group 13" transform="translate(-309.38 -517.137)">
            <path id="Path_141" data-name="Path 141" d="M363.529,551.38q0,5.538-2.336,7.871t-7.871,2.336H341.385q-5.364,0-7.7-2.336t-2.336-7.871V523.362q-10.992-.036-21.971-.1v29.155q0,13.666,7.439,20.933t21.106,7.266h19.03q13.494,0,21.02-7.353t7.525-20.846V523.334q-10.989.045-21.971.059Z" fill="#eeeeee"/>
            <path id="Path_142" data-name="Path 142" d="M407.125,576.984q0,3.633,3.632,3.633h14.359q3.635,0,3.634-3.633V523.069q-10.812.089-21.625.161Z" fill="#eeeeee"/>
            <path id="Path_143" data-name="Path 143" d="M464.214,537.367h-.692l-7.752-14.545q-10.414.1-20.833.2l29.1,54.133a5.78,5.78,0,0,0,5.536,3.461h12.629q3.631,0,3.632-3.633V522.5q-10.807.124-21.625.24Z" fill="#eeeeee"/>
            <path id="Path_144" data-name="Path 144" d="M506.6,522.258v30.16q0,13.666,7.439,20.933t21.106,7.266H554q13.494,0,21.02-7.353t7.525-20.846v-8.131q0-3.8-3.806-3.807H564.207q-3.633,0-3.633,3.807v7.093q0,5.538-2.336,7.871t-7.871,2.336H538.6q-5.364,0-7.7-2.336t-2.335-7.871V522c-.19,0-.379,0-.569,0Q517.314,522.13,506.6,522.258Z" fill="#eeeeee"/>
            <path id="Path_145" data-name="Path 145" d="M654.166,551.38q0,5.538-2.335,7.871t-7.872,2.336H631.676q-5.538,0-7.785-2.336t-2.249-7.871V522.025q-10.989-.072-21.971-.119v30.512q0,13.666,7.439,20.933t21.106,7.266h19.376q13.665,0,21.106-7.266t7.44-20.933V522.466q-10.988-.1-21.972-.192Z" fill="#eeeeee"/>
            <path id="Path_146" data-name="Path 146" d="M696.9,576.984q0,3.633,3.632,3.633h14.36q3.633,0,3.633-3.633V522.827q-10.813-.084-21.625-.178Z" fill="#eeeeee"/>
            <path id="Path_147" data-name="Path 147" d="M753.985,537.367h-.692l-7.653-14.359q-10.506-.059-21.013-.135l29.185,54.283a5.783,5.783,0,0,0,5.537,3.461h12.629q3.631,0,3.632-3.633V523.126q-10.81-.02-21.625-.07Z" fill="#eeeeee"/>
            <path id="Path_148" data-name="Path 148" d="M832.353,558.127h-.693L824.164,523q-10.832.078-21.669.106l13.942,53.875a4,4,0,0,0,4.325,3.633h22.663q3.284,0,4.151-3.633l14.085-54.428q-10.887.181-21.782.3Z" fill="#eeeeee"/>
            <path id="Path_149" data-name="Path 149" d="M889,522l-.769.016v54.968q0,3.633,3.633,3.633h56.572q3.458,0,3.46-3.633V565.22q0-3.633-3.46-3.633H912.278q-2.074,0-2.076-1.9V535.637q0-1.9,2.076-1.9h29.583q3.633,0,3.633-3.633v-7.662C926.742,521.821,908.028,521.44,889,522Z" fill="#eeeeee"/>
            <path id="Path_150" data-name="Path 150" d="M971.1,523.363v53.621q0,3.633,3.632,3.633h14.36q3.633,0,3.633-3.633V524.046c-.907-.017-1.816-.024-2.722-.046Q980.5,523.721,971.1,523.363Z" fill="#eeeeee"/>
            <path id="Path_151" data-name="Path 151" d="M1028.187,537.367h-.693l-7.151-13.419q-10.445.246-20.835.189l28.506,53.019a5.781,5.781,0,0,0,5.536,3.461h12.629q3.633,0,3.633-3.633V522.852c-7.213.341-14.425.648-21.625.879Z" fill="#eeeeee"/>
            <path id="Path_152" data-name="Path 152" d="M1088.389,576.984q0,3.633,3.8,3.633h14.533q3.631,0,3.632-3.633V520.1q-10.947.312-21.97.837Z" fill="#eeeeee"/>
            <path id="Path_153" data-name="Path 153" d="M1149.8,576.984q0,3.633,3.633,3.633h14.7q3.633,0,3.632-3.633V521.292c-7.323-.388-14.647-.741-21.97-1Z" fill="#eeeeee"/>
            <path id="Path_154" data-name="Path 154" d="M1247.893,524.235V551.38q0,5.538-2.335,7.871t-7.872,2.336H1225.4q-5.538,0-7.784-2.336t-2.249-7.871V523.563c-7.324-.3-14.648-.678-21.972-1.08v29.935q0,13.666,7.44,20.933t21.1,7.266h19.376q13.666,0,21.107-7.266t7.439-20.933V524.136Q1258.9,524.277,1247.893,524.235Z" fill="#eeeeee"/>
            <path id="Path_155" data-name="Path 155" d="M1290.622,576.984q0,3.633,3.633,3.633h14.359q3.633,0,3.633-3.633V522.893q-10.812.5-21.625.808Z" fill="#eeeeee"/>
            <path id="Path_156" data-name="Path 156" d="M1347.712,537.367h-.692l-8.505-15.957q-10.164.675-20.308,1.19l29.332,54.556a5.781,5.781,0,0,0,5.536,3.461H1365.7q3.633,0,3.633-3.633V519q-10.836.977-21.625,1.766Z" fill="#eeeeee"/>
            <path id="Path_157" data-name="Path 157" d="M1441.649,540.308h-25.6l5.535-22.219c-7-.553-14.037-.911-21.114-.952l-15.734,59.847q-1.038,3.633,2.076,3.633h16.608a3.447,3.447,0,0,0,2.509-.779,5.349,5.349,0,0,0,1.124-2.854l4.845-19.031h33.734l4.844,19.031a5.9,5.9,0,0,0,1.038,2.854,3.4,3.4,0,0,0,2.595.779h16.608q3.114,0,2.076-3.633l-14.422-54.86c-7.291-.89-14.584-1.806-21.9-2.609Z" fill="#eeeeee"/>
            <path id="Path_158" data-name="Path 158" d="M1488.185,525.242v51.742q0,3.633,3.632,3.633h56.917q3.459,0,3.46-3.633V565.22q0-3.8-3.46-3.806h-36.5q-2.074,0-2.076-1.9V525.16A34.388,34.388,0,0,1,1503,526C1498.049,525.879,1493.112,525.61,1488.185,525.242Z" fill="#eeeeee"/>
            <path id="Path_159" data-name="Path 159" d="M1583.332,555.705v21.279q0,3.633-3.287,3.633h-15.4q-3.462,0-3.46-3.633V555.878q0-3.459,3.46-3.46h15.4Q1583.328,552.418,1583.332,555.705Z" fill="#eeeeee"/>
          </g>
        </svg>
      </div>
      <p className="landing__tagline">A creative web development studio.</p>
    </div>
  )
}
export default Landing;