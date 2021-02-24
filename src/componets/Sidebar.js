import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { sidebarItemsData } from '../data/SidebarData'

function Sidebar() {
    return (
        <Container>
            <WorkSpaceContainer>
                <Name>
                    CleverProgramer
               </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkSpaceContainer>
            <MainChannels>
                {
                    sidebarItemsData.map(item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }

            </MainChannels>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background: #3f0e40;


`
const WorkSpaceContainer = styled.div`
    color:white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
    cursor: pointer; 


`

const Name = styled.div`
      
`
const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background: white;
    color : #3f0e40;
    fill: #3f0e40;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 20px;

`

const MainChannels = styled.div`
    padding-top: 20px;  
`

const MainChannelItem = styled.div`
    color: rgb(188,171,188);
    display: grid;
    grid-template-columns: 15% auto;
    align-items : center;
    padding-left: 19px;
    cursor: pointer;
`