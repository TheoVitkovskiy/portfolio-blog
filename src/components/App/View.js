import React from 'react';

import { Sidebar, Segment, Rail, Sticky, Header, Image } from 'semantic-ui-react';

import Hamburger from 'react-hamburger-menu';

import SideNav from 'components/SideNav';
import SocialMediaSidebar from './SocialMediaSidebar';
import Routes from './Routes';

import foto3 from "images/foto3.png";

const View = ({
    visible, blogs, toggleVisibility, open, handleContextRef, contextRef, socialMediaVisible
}) => {
    return (
        <div ref={handleContextRef}>
            <Sidebar.Pushable
                as={ Segment }
            >
                <SideNav 
                    visible={ visible }
                    toggleVisibility={ toggleVisibility }
                />
                
                <Sidebar.Pusher style={{ minHeight: '100vh' }}>
                    <div 
                        style={{
                            marginLeft: '92%',
                            marginTop: '3em',
                        }}
                    >
                        <Hamburger 
                            isOpen={ open }
                            menuClicked={ toggleVisibility }
                            strokeWidth={4}
                            color='grey'
                            width={44}
                            height={35}
                            borderRadius={3}
                            animationDuration="0.6"
                        />
                    </div>
                    <Routes />
                </Sidebar.Pusher>

            </Sidebar.Pushable>
            <Rail style={{ width: '90px' }}>
                <Sticky context={contextRef}>
                  {/* <SocialMediaSidebar visible={socialMediaVisible}/> */}
                </Sticky>
            </Rail>
        </div>
    );
}

export default View;