import styled from "styled-components"

const TraderStyle = styled.div`
    height: calc(100vh - 103px);
    width: 100%;
    padding: 50px 15px;
    .mainContainer{
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        height: 200px;
     .trader{
        height: 75px;
        width: 300px;
        background: rgb(57 60 69);
        color: wheat;
        margin-left: 8px;
        border-radius: 7px;
        display: flex;
        align-items: center;
        padding: 0 15px;
        margin-top: 8px;
        div{
            line-height: 1.5;
            h4{
                color: #fff;
            }
            a{
                color:rgb(178 137 85);
                text-decoration: none;
            }
        }

     }
    }

`
export {TraderStyle}