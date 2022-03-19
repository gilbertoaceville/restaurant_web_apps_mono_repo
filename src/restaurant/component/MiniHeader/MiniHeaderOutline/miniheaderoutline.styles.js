import styled from 'styled-components'



// Add active class to the current button (highlight it)
// var header = document.getElementById("myDIV");
// var btns = document.getElementsByClassName("li");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }

export const DashboardMiniHead = styled("div")`
border-bottom: 1px solid #7F7F7F59;
height: 50px;
display: flex;
justify-content: space-between;
align-items: flex-end ;
/* border: 1px solid red; */
`;



export const Navigation = styled("div")`
/* border: 1px solid red; */
width: max-content;
display: flex;
align-items: flex-end;
padding: 5px 0;


svg{
    cursor: pointer;
    font-size: 20px;
}

 span{
     padding: 0 5px;
     font-weight: bold;
    cursor: pointer;
   
}


`;
export const Settings = styled(Navigation)`


svg{
    color:  #F38B1C;
    margin-left: 5px;
    padding: 5px;
    height:25px;
    width: 25px; 
    border-radius: 100px ;
    cursor: pointer;
}
svg:nth-child(1){
    border: 1px solid #F38B1C;
}

svg:last-child{
    padding-right: 0;
}
`;

export const OrderRequestHeader = styled('div')`
/* border: 1px solid red; */
height: 100%;
width: 100%;
display: flex;
align-items: flex-end;




.li{
height: 100%;
display: flex;
justify-content: flex-start;
align-items: flex-end;
color: #7F7F7F60;
list-style: none;
padding: 0 5px;
margin-bottom: -1px;
cursor: pointer;
font-size: 15px;
transition: border-bottom 0.1s ease-in-out;



&:hover{
color: #F38B1C;
border-bottom: 1px solid #F38B1C;
}

}
.active{
color: #F38B1C;
border-bottom: 1px solid #F38B1C;
}
.inactive{
color: green;
border-bottom: 1px solid transparent;
}
`



// class Popular extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         selectedLanguage: 'All'
//       };

//       this.updateLanguage = this.updateLanguage.bind(this);
//     }
//     updateLanguage(lang) {
//       this.setState(function() {
//         return {
//           selectedLanguage: lang
//         }
//       });
//     }

//     render() {
//       var languages = ['All', 'JavaScript', 'CSS', 'HTML'];
//       return (
//         <ul>
//           <p>selected language: {this.state.selectedLanguage}</p>
//           {languages.map(function(lang) {
//             return <li
//                      style={lang === this.state.selectedLanguage ? {color: 'red'} : null}
//                      onClick = {this.updateLanguage.bind(null, lang)}
//                      >{lang}</li> 
//           },this)}
//         </ul>
//       )
//     }
//   }


//   ReactDOM.render(<Popular />, document.querySelector(".app"));
