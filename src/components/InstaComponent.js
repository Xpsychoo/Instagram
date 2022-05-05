import React from 'react'
import NotificationComponent from './Notification.component';
import GridProfile from './ProfileGrid.component';
import ProfileTopsec from './ProfileTopsec.component';
import Video_component from './video_component';
import Nav_tab from './nav_tab.component';
import ProfileTagComponent from './ProfileTagComponent'
import Stories_component from './Stories_component'

export const InstaComponent = () => {
  return (
    <>
         <div className="Main__section">
        <div className="tab-content" id="insta-tabContent">
          <div className="all_height tab-pane fade show active" id="insta-home" role="tabpanel" aria-labelledby="insta-home-tab">
            <div className="top-most-sec">
              <p className="username">__xpsycho <i className="fas fa-chevron-down" /> </p>
              <div className=" "><span style={{cursor: 'pointer'}} className="boxx fas fa-plus" /> <span className="fas fa-bars" /></div>
            </div>

            <ProfileTopsec />

            <div className="bio_name_sec">
              <p className="name">Ajay Choudhary</p>
              <p className="bio-under"> Loading... </p>
            </div>
            <div className="edit_profile_sec spc">
              <button className="EditProbtn"> Edit Profile</button>
              <span className="add_friend fas fa-user-plus" />
            </div>
            <div className="stories_saved_sec spc">

              <Stories_component />

            </div>
            <div className="post_content spc">
              

              <Nav_tab />
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <div className="img__tab">

                    <GridProfile />

                  </div>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <div className="video_tab">

                    <Video_component />

                  </div>
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

                <ProfileTagComponent />

                </div>
              </div>
            </div>
          </div>
          <div className="all_height tab-pane fade" id="insta-profile" role="tabpanel" aria-labelledby="insta-profile-tab">
            Home
          </div>
          <div className="all_height tab-pane fade" id="insta-Search" role="tabpanel" aria-labelledby="insta-Search-tab">
            Search
          </div>
          <div className="all_height tab-pane fade" id="insta-Notification" role="tabpanel" aria-labelledby="insta-Notification-tab">
            <div className="notification__section">
              <div className="top-seec">
                Activity
              </div>
              <div className="notify__lists">

                <NotificationComponent />

              </div>
            </div>
          </div>
          <div className="all_height tab-pane fade" id="insta-contact" role="tabpanel" aria-labelledby="insta-contact-tab">
            Video
          </div>
        </div>
        <div className="Home__navigation">
          <ul className="nav nav-pills" id="insta-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="insta-profile-tab" data-bs-toggle="pill" data-bs-target="#insta-profile" type="button" role="tab" aria-controls="insta-profile" aria-selected="false"><i className="fas fa-home" /></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="insta-Search-tab" data-bs-toggle="pill" data-bs-target="#insta-Search" type="button" role="tab" aria-controls="insta-Search" aria-selected="false"><i className="fas fa-search" /></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="insta-contact-tab" data-bs-toggle="pill" data-bs-target="#insta-contact" type="button" role="tab" aria-controls="insta-contact" aria-selected="false"><i className="fas fa-play" /></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="insta-Notification-tab" data-bs-toggle="pill" data-bs-target="#insta-Notification" type="button" role="tab" aria-controls="insta-Notification" aria-selected="false"><i className="fas fa-heart" /></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="insta-home-tab" data-bs-toggle="pill" data-bs-target="#insta-home" type="button" role="tab" aria-controls="insta-home" aria-selected="true"><img className="imgproo" src="images/weeed.jpg" alt="" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default InstaComponent;