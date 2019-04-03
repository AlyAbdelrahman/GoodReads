import React from 'react';
// import { Tab, Tabs } from 'react-bootstrap';
import { CategoriesList } from './CategoriesList'
import {BooksListing} from './BooksListing'
import {AuthorsListing} from './AuthorsList'
import { MyContext } from '../../App'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import {WantReadBooks} from './WantReadBooks'
import {WillReadBooks} from './WillReadBooks'
import {ReadBooks} from './ReadBooks'

const uuidv4 = require('uuid/v4');


export class UserDashBoard extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
         
        }
    }

render() 
{
return (
    <MyContext.Consumer>{
        
        value => (
            <React.Fragment>
       <Tabs defaultTab="vertical-tab-one" vertical>
        <TabList>
            <Tab tabFor="vertical-tab-one">Tab 1</Tab>
            <Tab tabFor="vertical-tab-two">Tab 2</Tab>
            <Tab tabFor="vertical-tab-three">Tab 3</Tab>
        </TabList>

        <TabPanel tabId="vertical-tab-one">
            <ReadBooks/>
        </TabPanel>

        <TabPanel tabId="vertical-tab-two">
            <WantReadBooks/>
        </TabPanel>

        <TabPanel tabId="vertical-tab-three">
            <WillReadBooks/>
        </TabPanel>
    </Tabs>

        </React.Fragment>
                    )
                }
</MyContext.Consumer>
)
}}

