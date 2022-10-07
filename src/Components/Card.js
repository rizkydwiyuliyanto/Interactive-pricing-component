import React from "react";
import Styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import sliderIcon from "../../images/icon-slider.svg";
import checkIcon from "../../images/icon-check.svg";

const PageviewsCountParent = Styled.div `
display: flex;
color:hsl(225, 20%, 60%);
border: 1px solid unset;
@media screen and (max-width: 799px){
  justify-content: center;
  grid-area: myArea1;
}
`

const PageviewsCountText = Styled.p`
  letter-spacing: 2px;
  font-weight: bold;
  font-size:1rem;
`

const PageviewsCount = ({ Count }) => {
  return (
    <PageviewsCountParent>
      {parseInt(Count) == 0 ? <PageviewsCountText>10K</PageviewsCountText> : ""}
      {parseInt(Count) == 1 ? <PageviewsCountText>50K</PageviewsCountText> : ""}
      {parseInt(Count) == 2 ? <PageviewsCountText>100K</PageviewsCountText> : ""}
      {parseInt(Count) == 3 ? <PageviewsCountText>500K</PageviewsCountText> : ""}
      {parseInt(Count) == 4 ? <PageviewsCountText>1M</PageviewsCountText> : ""}
      <PageviewsCountText style={{ marginLeft: "0.2em" }}>PAGEVIEWS</PageviewsCountText>
    </PageviewsCountParent>
  );
};

const BillingTextParent = Styled.div`
justify-content:end;
display: flex;
align-items:center;
border:1px solid unset;
@media screen and (max-width: 799px) {
  justify-content:center;
  grid-area: myArea2;
}
`;

const BillingText = Styled.p`
  color: ${props => props.Month? "hsl(225, 20%, 60%)":"black"};
  font-size: ${props => props.Month? "1rem":"2.5rem"}
`

const BillingCount = ({ Count }) => {
  return (
    <div>
      <BillingTextParent>
        {parseInt(Count) == 0 ? <BillingText>$8</BillingText> : ""}
        {parseInt(Count) == 1 ? <BillingText>$12</BillingText> : ""}
        {parseInt(Count) == 2 ? <BillingText>$16</BillingText> : ""}
        {parseInt(Count) == 3 ? <BillingText>$24</BillingText> : ""}
        {parseInt(Count) == 4 ? <BillingText>$36</BillingText> : ""}
        <BillingText Month style={{ marginLeft: "0.5em" }}>/ month</BillingText>
      </BillingTextParent>
    </div>
  );
};

const InputParent = Styled.div `
grid-column: 1/span 2;
height: 50px;
border: 1px solid unset;
display: flex;
align-items: center;
@media screen and (max-width: 799px) {
  gridColumn: 1/span 1;
  grid-area: myArea3;
}
`

const InputSlider = Styled.input`
background: linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) 50%, hsl(224, 65%, 95%) 50%, hsl(224, 65%, 95%) 100%);
// border: solid 1px #00b300;
width: 100%;
outline: none; 
transition: background 450ms ease-in;
-webkit-appearance: none;
    width: 100%;
    height: 10px;
    border-radius: 20px;
    &::-moz-range-thumb {
      background-color: blue;
      background-image: url(${sliderIcon});
      border: none;
      background-repeat: no-repeat;
      background-position: center center;
      width: 30px;
      height: 30px;
      background-color: #24AEA1;
      border-radius: 50%;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance:none;
      background-image: url(${sliderIcon});
      border: none;
      background-repeat: no-repeat;
      background-position: center center;
      width: 30px;
      height: 30px;
      position: relative;
      z-index:3;
      background-color: #24AEA1;
      border-radius: 50%;
    }
    &:hover {
      cursor: pointer;
    }
`;

const Input = ({ SetpageView, Pageviews }) => {
  const Ref = useRef();
  useEffect(() => {
    console.log(Pageviews);
    Ref.current.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${Pageviews * 25}%, hsl(224, 65%, 95%) ${Pageviews * 25}%, hsl(224, 65%, 95%) 100%)`;
  });
  const handleInput = (e) => {
    SetpageView(e.target.value);
  };
  return (
    <InputParent>
      <InputSlider
        ref={Ref}
        onInput={handleInput}
        type="range"
        min="0"
        max="4"
        // step={"20"}
        value={Pageviews}
      />
    </InputParent>
  );
};

const ToggleSwitch = Styled.input `
opacity: 0;
width: 0;
height: 0;
&:checked{
    + .slider{
      background-color: hsl(174, 77%, 80%);
    }
}

&:focus {
  + .slider {
    box-shadow: 0 0 1px hsl(174, 77%, 80%);
  }
}

&:checked {
  + .slider{
    &:before{
      left: 40px;
    }
  }
}

`
const Slider = Styled.span `
font-size: 1rem;
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color:hsl(223, 50%, 87%);
transition: .4s;
border-radius: 34px;
&:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  left: 4px;
  top: 17%;
  background-color: white;
  transition: .4s;
  border-radius:50%;
}
`

const Textsmall = Styled.span `
 font-size: 0.85rem;
 color: hsl(225, 20%, 60%);
 margin-right: ${props => props.Yearly? "0.9rem":""};
 @media screen and (max-width: 799px) {
  font-size: 0.5rem;
 }
`
const Discount = Styled.span `
font-size:0.6rem;
background-color:hsl(14, 92%, 95%);
color: hsl(15, 100%, 70%);
padding:0.3em 0.5em;
border-radius:50px;
&::after {
  content: '25% discount';
  @media screen and (max-width: 799px) {
    content: '25%';
  }
}
`

const Switch = () => {
  const [chekced, setIsChecked] = useState(false);
  const ToggleRef = useRef()
  const handleClick = () => {
    setIsChecked(prev=> !prev);
    console.log("test")
  }
  const toggle = () => {
    if (chekced) {
      ToggleRef.current.setAttribute("checked", "");
      return;
    }
    ToggleRef.current.removeAttribute("checked")
  };
  useEffect(() => {
      toggle()
  })
  return (
    <div style={{ "border":"1px solid unset",display: "flex", justifyContent: "end","alignItems":"center"}}>
      <Textsmall>Monthly Billing</Textsmall>
      <div style={{"margin":"0 0.5em","border":"1px solid unset","position":"relative","display":"inline-block", "width":"60px"}}>
        <ToggleSwitch ref={ToggleRef} type={"checkbox"} />
        <Slider onClick={handleClick} className="slider"/>
      </div>
      <Textsmall Yearly>Yearly Billing</Textsmall>
      <Discount></Discount>
    </div>
  );
}

const Button = Styled.button `
  font-size: 0.85rem;
  color: white;
  width: 140px;
  border-radius: 50px;
  text-align: center;
  padding: 0.7em 0;
  background-color:hsl(227, 35%, 25%);
  border: none;
  color: hsl(226, 100%, 87%);
  &:hover{
    cursor: pointer;
  }
`
const CardFooterParent = Styled.div`
height:90px;
border: 1px solid unset;
display:flex;
justify-content:space-between;
align-items:center;
flex-direction: row;
padding-top: 1em;
// border-top: 1px solid grey;
@media screen and (max-width: 799px){
  flex-direction: column;
  height: 135px;
}
`;

const List = Styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:space-between;
span {
  font-size: 0.85rem;
  color: hsl(225, 20%, 60%);
  width:100%;
}
@media screen and (max-width: 799px){
  text-align: center;
  width: 100%;
  height: 60%;
}
`

const Cardfooter = () => {
  return (
    <CardFooterParent>
      <List>
        <span style={{}}><img style={{"marginRight":"0.7em"}} src={checkIcon} width={"10px"}/>Unlimited websites</span>
        <span><img style={{"marginRight":"0.7em"}} src={checkIcon} width={"10px"}/>100% data ownership</span>
        <span><img style={{"marginRight":"0.7em"}} src={checkIcon} width={"10px"}/>Email reports</span>
      </List>
      <Button>Start my trial</Button>
    </CardFooterParent>
  );
};

const Wrapper = Styled.div`
    border-radius: 10px;
    position: absolute;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.5em 2em;
    width: 500px;
    height: 350px;
    left: 50%;
    top: 350px;
    transform: translate(-50%,-50%);
    background-color:  hsl(0, 0%, 100%);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    @media screen and (max-width: 799px){
      width: 80%;
      top: 58%;
      height: 430px;
    }
`;

const Pageviews = Styled.div`
    display: grid;
    grid-template-column: auto auto;
    align-items: center;
 
    @media screen and (max-width: 799px){
      grid-template-column: auto;
      grid-template-areas: 
      'myArea1'
      'myArea3'
      'myArea2'
    }
`;

const Divider = Styled.div `
    width: 100%;
    height: 1.2px;
    background-color: hsl(224, 65%, 95%);
    position: absolute;
    left:0;
    bottom:130px;
    @media screen and (max-width: 799px) {
    bottom:180px;
    }
`

const Card = () => {
  const [pageViews, setPageView] = useState("0");
  return (
    <Wrapper>
      <Pageviews>
          <PageviewsCount Count={pageViews} />
          <BillingCount Count={pageViews} />
          <Input SetpageView={setPageView} Pageviews={pageViews} />
      </Pageviews>
      <Switch/>
      <Divider/>
      <Cardfooter/>

      {/* <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </Wrapper>
  );
};


export default Card;
