import React from 'react'
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import styled from 'styled-components'

function ChatMessage({text, name, image, timeStamp}) {
    return (
        <Container>
            <UserAvatar>
                <img src={image}></img>    
            </UserAvatar>
            <MessageContent>
                <Name>
                    {name}
                    
                    <spam>

                    <SimpleDateTime  dateSeparator="-"  timeSeparator=":" format="DMY" showTime="1"  meridians="1">{new Date(timeStamp.toDate()).toUTCString()}</SimpleDateTime>
                    </spam>
                </Name>
                <Text>
                    {text}
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage


const Container = styled.div`
    padding: 8px 20px; 
    display: flex;   
    align-items: center; 

    :hover{
        background:rgb(97,96,97);
        spam{
            color: white;
        }
    }

`
const MessageContent = styled.div`
    display: flex;
    flex-direction: column;


`
const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 2px;
    overflow: hidden;
    margin-right: 8px;


    img{
        width: 100%;
    }
`
const Name = styled.div`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;
    
    spam{
        padding-left: 4px;
        font-weight: 300; 
        color: rgb(97,96,97);
        font-size: 13px;
    }

`


const Text = styled.div`
`