import styled from 'styled-components';


const TraderViewStyle = styled.div`
width:100%;
 .infoContainer{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: 300px;
    padding: 0 20px;
      .traderPersonalInfo{
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #3b3e47;
        border-radius: 5px;
         .name{
           h3,h5{
             color:#fff;
           }
           p{
            color: #ffffff40;
            font-size: 14px;
           }
         }
      }
      .workInfo{
        width: 68%;
        height: 100%;
        background: #3b3e47;
        margin-left: 20px;
        border-radius: 5px;
        .workInfo_header{
          display: flex;
          height: 25%;
          border-bottom: 1px solid #fff;
          .percent{
            width: 33.3%;
            padding: 20px 20px;
          }
          div{
            padding: 20px 13px;
            color: white;
          }
        }
        .workInfo_body{
            display: flex;
            flex-wrap:wrap;
            width: 100%;
            .private-info{
              width: 33.3%;
              padding: 24px 12px;
              .info{
                p{
                  color: #ffffff40;
                  font-size: 14px;
                }
                h6{
                  color: #fff;
                  font-size: 12px;
                }
              }
              .dataPnl{
                h4{
                  color:#fff;
                }
                div{
                  p{
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #ffffff2b;
                    color: #696b69;
                  }
                }
              }
            }

        }
      }
 }
 .chartContainer{
    width: 100%;
    display: flex;
    flex-wrap:wrap;
    align-items: flex-start;
     .chart{
       width:68%;
     }
    .select{
      width: 28%;
      padding: 20px 0 0 0px;
      margin-left: 15px;
      color: white;
      select{
      width:90%;
      margin-top: 15px;
      height: 36px;
      border-radius: 6px;
      background: #3b3e47;
      border: none;
      outline: none;
      padding: 0 8px;
      color: #ffffff5e;
     }
    }
 }
 a{
   text-decoration: none;
   color:#dcb64f;
   font-size: 22px;
 }

 @media  (max-width:1055px){
    .infoContainer{
      height: auto;
      .traderPersonalInfo{
        width:100%;
        padding: 0 20px;
      }
      .workInfo{
        width:100%;
        margin:40px 0;
        .workInfo_body{
          .private-info{
            width: 100%;
          }
        }
      }
    }
    .chartContainer{
      flex-direction: column-reverse;
       .select{
         width:100%;
       }
       .chart{
         width:100%;
       }
    }

 }
`
export {TraderViewStyle}