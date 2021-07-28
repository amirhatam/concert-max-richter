import { Drawer, List, ListItem } from '@material-ui/core'
import React from 'react'
import { scroller } from "react-scroll"


function SideDrawer(props) {
    const { open, onClose } = props

    const scrollToElement =  (element)  => {
        scroller.scrollTo(element, {
                duration: 1500,
                delay: 100,
                smooth: true,
                offset: -150
            });
            onClose(false)
    };

    return (
        <Drawer anchor="left" open={open} onClose={() => onClose(false)}>
            <List component="nav">
                <ListItem button onClick={() => scrollToElement("Featured")}>
                    Times Left
                </ListItem>
                <ListItem button onClick={() => scrollToElement("ConcertInfo")}>
                    Consert Info
                </ListItem>
                <ListItem button onClick={() => scrollToElement("Highlights")}>
                    Highlights
                </ListItem>
                <ListItem button onClick={() => scrollToElement("Pricing")}>
                    Pricing
                </ListItem>
                <ListItem button onClick={() => scrollToElement("Location")}>
                    Address
                </ListItem>
            </List>
        </Drawer>
    )
}

export default SideDrawer
