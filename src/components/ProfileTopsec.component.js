import React from 'react'

const ProfileTopsec = () => {

    const counters = document.querySelectorAll('.counter');

    counters.forEach((counter) => {
        console.log(counter);
        counter.innerHTML = 0;

        const updateCounter = () => {
            const targetCount = +counter.getAttribute('data-target');
            console.log(typeof targetCount);

            const startingNumber = Number(counter.innerHTML);
            const incr = targetCount / 100;

            if (startingNumber < targetCount) {
                counter.innerHTML = `${Math.round(startingNumber + incr)}`;
                setTimeout(updateCounter, 100)
            }
        }

        updateCounter();
    })
    return (
        <>
            <div onLoad={counters} className="top-sec">
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