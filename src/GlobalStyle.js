import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
body{
    overflow-x:hidden;
}
 *,*::after,*::before{
     box-sizing:border-box;
     padding:0;
     margin:0;
 }
`
export {GlobalStyle}