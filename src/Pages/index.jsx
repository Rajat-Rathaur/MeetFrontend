import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import Home from './Home'


const index = () => {
    const { roomId } = useParams();
    const myMeeting = async (element) => {
        const appID = 1704634069;
        const serverSecret = "1b67ae1b890425be381127af06c2bd28";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "rajat");
        const zp = ZegoUIKitPrebuilt.create(kitToken)
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference
            }
        }
        );
    }
    return (
        <div className='room-page'>
            <div>
                <div ref={myMeeting} />
            </div>
        </div>
    )
}

export default index
