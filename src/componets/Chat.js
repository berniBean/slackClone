import React from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

function Chat() {
    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        #Clever
                    </ChannelName>
                    <ChannelInfo>
                        Company-wide annoucemnets and work-based matters
                    </ChannelInfo>

                </Channel>
                <ChannelDetails>
                    <div>
                        Details
                    </div>
                    <Info />
                </ChannelDetails>
            </Header>
            <MessageContainer>
                <ChatMessage />
            </MessageContainer>

            <ChatInput />

        </Container>
    )
}

export default Chat

const Container = styled.div`


display: grid;
grid-template-rows: 64px auto min-content;


`
const Header = styled.div`
    padding-left:20px;
    padding-right:20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(83,39,83,.13);
    justify-content: space-between;
`
const Channel = styled.div`

`
const ChannelDetails = styled.div`
    display: flex;
    align-items: center;
    color: #606060;
`
const ChannelName = styled.div`
     font-weight: 700;
`
const ChannelInfo = styled.div`
    font-weight: 400;
    color: #606060;
    margin-top: 8px;
`
const Info = styled(ErrorOutlineIcon)`
    margin-left: 10px;
`

const MessageContainer = styled.div`
`


