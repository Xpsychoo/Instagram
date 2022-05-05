import React from 'react'

const ProfileTopsec = () => {
    return (
        <>
            <div className="top-sec">
                <div className="img-seec">
                    <img id="profilepicture" src="images/weeed.jpg" alt="profile-picture" />
                </div>
                <div className="follower-sec">
                    <div className="InBox">
                        <div data-target={270} className="counter" id="postsCount" />
                        <p>posts</p>
                    </div>
                    <div className="InBox">
                        <div data-target={99990} className="counter" id="followersCount" />
                        <p>Followers</p>
                    </div>
                    <div className="InBox">
                        <div data-target={270} className="counter" id="followingCount" />
                        <p>Following</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileTopsec