import React from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

function Chat() {
    return (
        <Container>
            <Main>
                <DetailsUser>
                    <Name>
                        #Clever
                        <StarBorderIcon />
                    </Name>
                   

                    <Description>
                        Company-wide annoucements and work-bassed matters
                    </Description>
                </DetailsUser>


                <DetailsSystem>
                    Details
                    <DetailsIcon>
                        <ErrorOutlineIcon />
                    </DetailsIcon>
                    
                </DetailsSystem>
                
            </Main>
        </Container>
    )
}

export default Chat

const Container = styled.div`
background : white;


`

const Main = styled.div`
display:flex;
justify-content: space-between;
box-shadow: 0 0 0 1px rgb(104 74 104 / 10%);

`
const DetailsUser = styled.div`

`
const Name = styled.div`
padding-top: 8px;
padding-left: 8px;
display: flex;
aling-items: center;
`
const Description = styled.div`
padding-left: 8px;
`
const DetailsSystem = styled.div`
display:flex;
padding-top: 8px;

`
const DetailsIcon = styled.div`

padding-right: 8px;
padding-left: 8px;
cursor: pointer; 
`