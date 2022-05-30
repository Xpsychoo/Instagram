import React from 'react'

const ProfileTopsec = () => {

   /*  const counters = document.querySelectorAll('.counter');

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
        onLoad={counters}

        updateCounter();
    }) */
    return (
        <>
            <div className="top-sec">
                <div className="img-seec">
                    <img id="profilepicture" src="images/weeed.jpg" alt="profile" />
                </div>
                <div className="follower-sec">
                    <div className="InBox">
                        <div className="counter" id="postsCount" >27</div>
                        <p>posts</p>
                    </div>
                    <div className="InBox">
                        <div className="counter" id="followersCount" >997k</div>
                        <p>Followers</p>
                    </div>
                    <div className="InBox">
                        <div className="counter" id="followingCount" >3</div>
                        <p>Following</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileTopsec